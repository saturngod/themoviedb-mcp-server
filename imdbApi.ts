import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export class IMDBApi {
  async searchMovies(query: string, language: string = 'en-US', page: number = 1, year?: number) {
    let url = `${this.baseUrl}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=${language}&page=${page}`;
    if (year !== undefined && year !== null) {
      url += `&year=${year}`;
    }
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          accept: 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.status_message || error.message);
    }
  }
  private baseUrl: string;
  private token: string;

  constructor() {
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.token = process.env.token || '';
    if (!this.token) {
      throw new Error('TMDB token not found in .env');
    }
  }

  async getPopularMovies(language: string = 'en-US', page: number = 1) {
    const url = `${this.baseUrl}/movie/popular?language=${language}&page=${page}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          accept: 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.status_message || error.message);
    }
  }
  
  async getMovieDetail(movie_id: number, language: string = 'en-US') {
    const url = `${this.baseUrl}/movie/${movie_id}?language=${language}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          accept: 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.status_message || error.message);
    }
  }
  
  async getNowPlayingMovies(language: string = 'en-US', page: number = 1) {
    const url = `${this.baseUrl}/movie/now_playing?language=${language}&page=${page}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          accept: 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.status_message || error.message);
    }
  }

  async getMovieCredits(movie_id: number, language: string = 'en-US') {
    const url = `${this.baseUrl}/movie/${movie_id}/credits?language=${language}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          accept: 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error?.response?.data?.status_message || error.message);
    }
  }
}
