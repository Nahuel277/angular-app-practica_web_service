export interface YouTubeResult {
    id: string;
    url: string;
    title: string;
    description: string;
    duration: number;
    duration_formatted: string;
    uploadedAt: string;
}

export interface YouTubeResponse {
    results: YouTubeResult[];
  }