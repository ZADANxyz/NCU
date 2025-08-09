interface GoogleDriveImage {
  id: number;
  src: string;
  alt: string;
  name: string;
  fileId: string;
}

interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  webViewLink: string;
}

export interface GoogleDrivePdf {
  id: string; // fileId
  name: string;
  slug: string;
  embedUrl: string;
}

type DegreeFolderKeys = 'associate' | 'bachelor' | 'master' | 'doctorate';

class GoogleDriveService {
  private apiKey: string = "AIzaSyCkc1syK-D7R6zGUohUZ8_1uO73tVG3Y8g"; // Hardcoded API key
  private folderIds = {
    gallery: "1FDYQplYRsIjqJqYuAHHDBglmy7t_Ar94", // Media gallery
    alumni: "1Jd9a_WIwC6qoKxGw5oUJ6N9BtPuCB-Ex", // Alumni slider
    aboutUs: "1XCz8U5a8gf6fZC1rArLuP7vfY2_OjFUM", // About us slider
    president: "11fChmVogNYLnvMEL_yG6q0PrdN9dqtN1", // Meet the president
    downloads: "1MYeEGTR6CRvSuu4nCZWQiCHduurJABYs", // PDFs for download
    associate: "1SNhV8dthzXYwz9ymV2JzlCJt1NJ8gdnc",
    bachelor: "164N_AUBQEkUssOxoVtC1YUNy7hz8smkt",
    master: "1U8zXzoxdQ73VuiEVStOp00dLDJlTV4lk",
    doctorate: "1fJdXlf3--QT1c9Unr5k6fbsWi99guyu1",
  };

  getApiKey(): string {
    return this.apiKey;
  }

  async fetchImagesFromFolder(folderType: keyof typeof this.folderIds): Promise<GoogleDriveImage[]> {
    const folderId = this.folderIds[folderType];
    return this.fetchImages(folderId);
  }

  async fetchGalleryImages(): Promise<GoogleDriveImage[]> {
    return this.fetchImages(this.folderIds.gallery);
  }

  private async fetchImages(folderId: string): Promise<GoogleDriveImage[]> {
    const apiKey = this.getApiKey();

    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${apiKey}&fields=files(id,name,mimeType,webViewLink)`
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      const images: GoogleDriveImage[] = data.files.map((file: GoogleDriveFile, index: number) => ({
        id: index + 1,
        src: `https://lh3.googleusercontent.com/d/${file.id}`,
        alt: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension for alt text
        name: file.name,
        fileId: file.id
      }));

      return images;
    } catch (error) {
      console.error('Error fetching Google Drive images:', error);
      throw error;
    }
  }

  public async fetchPdfsForDegree(degreeLevel: DegreeFolderKeys): Promise<GoogleDrivePdf[]> {
    const folderId = this.folderIds[degreeLevel];
    if (!folderId) {
        throw new Error(`Invalid degree level: ${degreeLevel}`);
    }
    return this.fetchPdfsFromFolderId(folderId);
  }

  async fetchPdfs(): Promise<GoogleDrivePdf[]> {
    return this.fetchPdfsFromFolderId(this.folderIds.downloads);
  }

  private async fetchPdfsFromFolderId(folderId: string): Promise<GoogleDrivePdf[]> {
    const apiKey = this.getApiKey();

    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType='application/pdf'&key=${apiKey}&fields=files(id,name)`
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      const pdfs: GoogleDrivePdf[] = data.files.map((file: { id: string; name: string; }) => {
        const cleanName = file.name.replace(/\.pdf$/i, "");
        return {
          id: file.id,
          name: cleanName,
          slug: cleanName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
          embedUrl: `https://drive.google.com/file/d/${file.id}/preview`
        }
      });

      return pdfs;
    } catch (error) {
      console.error('Error fetching Google Drive PDFs:', error);
      throw error;
    }
  }
}

export const googleDriveService = new GoogleDriveService();
export type { GoogleDriveImage };