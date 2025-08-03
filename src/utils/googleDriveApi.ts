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

class GoogleDriveService {
  private apiKey: string = "AIzaSyCkc1syK-D7R6zGUohUZ8_1uO73tVG3Y8g"; // Hardcoded API key
  private folderId: string = "1FDYQplYRsIjqJqYuAHHDBglmy7t_Ar94"; // Your Google Drive folder ID

  getApiKey(): string {
    return this.apiKey;
  }

  async fetchGalleryImages(): Promise<GoogleDriveImage[]> {
    const apiKey = this.getApiKey();

    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${this.folderId}'+in+parents+and+mimeType+contains+'image/'&key=${apiKey}&fields=files(id,name,mimeType,webViewLink)`
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
        src: `https://drive.google.com/uc?export=view&id=${file.id}`,
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

}

export const googleDriveService = new GoogleDriveService();
export type { GoogleDriveImage };