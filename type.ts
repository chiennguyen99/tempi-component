export type CustomElementInterface = {
  text?: string;
  backgroundColor?: string;
  bannerImage?: string;
  timeVisibility?: {
    startTime?: string;
    endTime?: string;
  };
  isEditingMode?: boolean;
  viewMoreText?: string;
  viewMoreUrl?: string;
  platformConfig?: string;
  collectionSlug?: string;
};
