export type TeammatesType = {
  name: string;
  profileImage: string;
};

export type ServiceType = {
  projectName: string;
  projectImage: string;
  teamName: string;
  teamImage: string;
  teammates: Array<TeammatesType>;
  favourites: number;
  description: string;
  descriptionDetail: string;
  link: string;
  detailImage: Array<string>;
};

export type ServiceDataType = {
  serviceData: ServiceType;
};
