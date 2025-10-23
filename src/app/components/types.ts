export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  links: {
    github: string;
    live?: string;
  };
  imgSrc: string;
}

export interface Work {
  id: string;
  company: string;
  companySrc: string;
  designation: string;
  jobDescription: string[];
  duration: string[];
  imgSrc: string;
}
