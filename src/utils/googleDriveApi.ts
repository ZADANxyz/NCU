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
  private apiKey: string | null = null;
  private folderId: string = "1FDYQplYRsIjqJqYuAHHDBglmy7t_Ar94"; // Your Google Drive folder ID

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
    localStorage.setItem('googleDriveApiKey', apiKey);
  }

  getApiKey(): string | null {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('googleDriveApiKey');
    }
    return this.apiKey;
  }

  async fetchGalleryImages(): Promise<GoogleDriveImage[]> {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('Google Drive API key not set');
    }

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

  isValidApiKey(apiKey: string): boolean {
    // Basic validation - Google API keys are typically 39 characters and start with "AIza"
    return apiKey.length === 39 && apiKey.startsWith('AIza');
  }
}

export const googleDriveService = new GoogleDriveService();
export type { GoogleDriveImage };