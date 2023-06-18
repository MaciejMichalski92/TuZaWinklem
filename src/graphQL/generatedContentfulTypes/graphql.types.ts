export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename'
        ? T[P]
        : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Dimension: { input: any; output: any };
  HexColor: { input: any; output: any };
  JSON: { input: any; output: any };
  Quality: { input: any; output: any };
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Int']['input']>>
  >;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Int']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Int']['input']>>
  >;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  imageCollection?: Maybe<ImageCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetLinkingCollectionsImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<AssetLinkingCollectionsImageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetLinkingCollectionsImageCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/button) */
export type Button = Entry & {
  __typename?: 'Button';
  classes?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/button) */
export type ButtonClassesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/button) */
export type ButtonIsDisabledArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/button) */
export type ButtonIsPrimaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  items: Array<Maybe<Button>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ButtonFilter = {
  AND?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ButtonFilter>>>;
  classes?: InputMaybe<Scalars['String']['input']>;
  classes_contains?: InputMaybe<Scalars['String']['input']>;
  classes_exists?: InputMaybe<Scalars['Boolean']['input']>;
  classes_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  classes_not?: InputMaybe<Scalars['String']['input']>;
  classes_not_contains?: InputMaybe<Scalars['String']['input']>;
  classes_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled_not?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isPrimary_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ButtonLinkingCollections = {
  __typename?: 'ButtonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type ButtonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ButtonOrder {
  ClassesAsc = 'classes_ASC',
  ClassesDesc = 'classes_DESC',
  IsDisabledAsc = 'isDisabled_ASC',
  IsDisabledDesc = 'isDisabled_DESC',
  IsPrimaryAsc = 'isPrimary_ASC',
  IsPrimaryDesc = 'isPrimary_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/card) */
export type Card = Entry & {
  __typename?: 'Card';
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Image>;
  linkUrl?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CardLinkingCollections>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/card) */
export type CardImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/card) */
export type CardLinkUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/card) */
export type CardLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/card) */
export type CardSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/card) */
export type CardTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CardCollection = {
  __typename?: 'CardCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image?: InputMaybe<CfImageNestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  linkUrl_contains?: InputMaybe<Scalars['String']['input']>;
  linkUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkUrl_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  linkUrl_not?: InputMaybe<Scalars['String']['input']>;
  linkUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type CardLinkingCollections = {
  __typename?: 'CardLinkingCollections';
  carouselCollection?: Maybe<CarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
  mainPageCollection?: Maybe<MainPageCollection>;
};

export type CardLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<CardLinkingCollectionsCarouselCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type CardLinkingCollectionsMainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<CardLinkingCollectionsMainPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardLinkingCollectionsCarouselCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CardLinkingCollectionsMainPageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CardOrder {
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/carousel) */
export type Carousel = Entry & {
  __typename?: 'Carousel';
  cardsCollection?: Maybe<CarouselCardsCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CarouselLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/carousel) */
export type CarouselCardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<CarouselCardsCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/carousel) */
export type CarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/carousel) */
export type CarouselTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CarouselCardsCollection = {
  __typename?: 'CarouselCardsCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CarouselCardsCollectionOrder {
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CarouselCollection = {
  __typename?: 'CarouselCollection';
  items: Array<Maybe<Carousel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  cards?: InputMaybe<CfCardNestedFilter>;
  cardsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type CarouselLinkingCollections = {
  __typename?: 'CarouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type CarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CarouselOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  id_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  id_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heading) */
export type Heading = Entry & {
  __typename?: 'Heading';
  contentfulMetadata: ContentfulMetadata;
  isBold?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<HeadingLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heading) */
export type HeadingIsBoldArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heading) */
export type HeadingLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heading) */
export type HeadingTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heading) */
export type HeadingTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeadingCollection = {
  __typename?: 'HeadingCollection';
  items: Array<Maybe<Heading>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeadingFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeadingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeadingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  isBold?: InputMaybe<Scalars['Boolean']['input']>;
  isBold_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isBold_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type HeadingLinkingCollections = {
  __typename?: 'HeadingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mainPageCollection?: Maybe<MainPageCollection>;
};

export type HeadingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type HeadingLinkingCollectionsMainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<
      InputMaybe<HeadingLinkingCollectionsMainPageCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeadingLinkingCollectionsMainPageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HeadingOrder {
  IsBoldAsc = 'isBold_ASC',
  IsBoldDesc = 'isBold_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heroSection) */
export type HeroSection = Entry & {
  __typename?: 'HeroSection';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Image>;
  linkedFrom?: Maybe<HeroSectionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heroSection) */
export type HeroSectionDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heroSection) */
export type HeroSectionImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heroSection) */
export type HeroSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/heroSection) */
export type HeroSectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeroSectionCollection = {
  __typename?: 'HeroSectionCollection';
  items: Array<Maybe<HeroSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  image?: InputMaybe<CfImageNestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type HeroSectionLinkingCollections = {
  __typename?: 'HeroSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mainPageCollection?: Maybe<MainPageCollection>;
};

export type HeroSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroSectionLinkingCollectionsMainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<
      InputMaybe<HeroSectionLinkingCollectionsMainPageCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroSectionLinkingCollectionsMainPageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HeroSectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/image) */
export type Image = Entry & {
  __typename?: 'Image';
  altText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ImageLinkingCollections>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/image) */
export type ImageAltTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/image) */
export type ImageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/image) */
export type ImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type ImageCollection = {
  __typename?: 'ImageCollection';
  items: Array<Maybe<Image>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  altText?: InputMaybe<Scalars['String']['input']>;
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  altText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  altText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  altText_not?: InputMaybe<Scalars['String']['input']>;
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  altText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type ImageLinkingCollections = {
  __typename?: 'ImageLinkingCollections';
  cardCollection?: Maybe<CardCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroSectionCollection?: Maybe<HeroSectionCollection>;
  mainPageCollection?: Maybe<MainPageCollection>;
  metaCollection?: Maybe<MetaCollection>;
};

export type ImageLinkingCollectionsCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ImageLinkingCollectionsCardCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageLinkingCollectionsHeroSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<
      InputMaybe<ImageLinkingCollectionsHeroSectionCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageLinkingCollectionsMainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ImageLinkingCollectionsMainPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageLinkingCollectionsMetaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<ImageLinkingCollectionsMetaCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImageLinkingCollectionsCardCollectionOrder {
  LinkUrlAsc = 'linkUrl_ASC',
  LinkUrlDesc = 'linkUrl_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageLinkingCollectionsHeroSectionCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageLinkingCollectionsMainPageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageLinkingCollectionsMetaCollectionOrder {
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/link) */
export type Link = Entry & {
  __typename?: 'Link';
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LinkLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/link) */
export type LinkHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/link) */
export type LinkTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type LinkLinkingCollections = {
  __typename?: 'LinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LinkOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/mainPage) */
export type MainPage = Entry & {
  __typename?: 'MainPage';
  contentfulMetadata: ContentfulMetadata;
  heroSection?: Maybe<HeroSection>;
  linkedFrom?: Maybe<MainPageLinkingCollections>;
  mainCollection?: Maybe<MainPageMainCollection>;
  meta?: Maybe<Meta>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/mainPage) */
export type MainPageHeroSectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/mainPage) */
export type MainPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/mainPage) */
export type MainPageMainCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/mainPage) */
export type MainPageMetaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/mainPage) */
export type MainPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MainPageCollection = {
  __typename?: 'MainPageCollection';
  items: Array<Maybe<MainPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MainPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<MainPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MainPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroSection?: InputMaybe<CfHeroSectionNestedFilter>;
  heroSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<CfMetaNestedFilter>;
  meta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type MainPageLinkingCollections = {
  __typename?: 'MainPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};

export type MainPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MainPageMainCollection = {
  __typename?: 'MainPageMainCollection';
  items: Array<Maybe<MainPageMainItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MainPageMainItem =
  | Card
  | Heading
  | HeroSection
  | Image
  | Paragraph;

export enum MainPageOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/meta) */
export type Meta = Entry & {
  __typename?: 'Meta';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MetaLinkingCollections>;
  ogDescription?: Maybe<Scalars['String']['output']>;
  ogImage?: Maybe<Image>;
  ogTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/meta) */
export type MetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/meta) */
export type MetaLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/meta) */
export type MetaOgDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/meta) */
export type MetaOgImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/meta) */
export type MetaOgTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/meta) */
export type MetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MetaCollection = {
  __typename?: 'MetaCollection';
  items: Array<Maybe<Meta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MetaFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogDescription_contains?: InputMaybe<Scalars['String']['input']>;
  ogDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogDescription_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  ogDescription_not?: InputMaybe<Scalars['String']['input']>;
  ogDescription_not_contains?: InputMaybe<
    Scalars['String']['input']
  >;
  ogDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  ogImage?: InputMaybe<CfImageNestedFilter>;
  ogImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  ogTitle_contains?: InputMaybe<Scalars['String']['input']>;
  ogTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogTitle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  ogTitle_not?: InputMaybe<Scalars['String']['input']>;
  ogTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogTitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type MetaLinkingCollections = {
  __typename?: 'MetaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mainPageCollection?: Maybe<MainPageCollection>;
};

export type MetaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type MetaLinkingCollectionsMainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<InputMaybe<MetaLinkingCollectionsMainPageCollectionOrder>>
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MetaLinkingCollectionsMainPageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MetaOrder {
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/paragraph) */
export type Paragraph = Entry & {
  __typename?: 'Paragraph';
  classes?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ParagraphLinkingCollections>;
  sys: Sys;
  text?: Maybe<ParagraphText>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/paragraph) */
export type ParagraphClassesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/paragraph) */
export type ParagraphLinkedFromArgs = {
  allowedLocales?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

/** [See type definition](https://app.contentful.com/spaces/p2sjcqowhc3c/content_types/paragraph) */
export type ParagraphTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ParagraphCollection = {
  __typename?: 'ParagraphCollection';
  items: Array<Maybe<Paragraph>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ParagraphFilter = {
  AND?: InputMaybe<Array<InputMaybe<ParagraphFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ParagraphFilter>>>;
  classes?: InputMaybe<Scalars['String']['input']>;
  classes_contains?: InputMaybe<Scalars['String']['input']>;
  classes_exists?: InputMaybe<Scalars['Boolean']['input']>;
  classes_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  classes_not?: InputMaybe<Scalars['String']['input']>;
  classes_not_contains?: InputMaybe<Scalars['String']['input']>;
  classes_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
};

export type ParagraphLinkingCollections = {
  __typename?: 'ParagraphLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  mainPageCollection?: Maybe<MainPageCollection>;
};

export type ParagraphLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type ParagraphLinkingCollectionsMainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<
    Array<
      InputMaybe<ParagraphLinkingCollectionsMainPageCollectionOrder>
    >
  >;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ParagraphLinkingCollectionsMainPageCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ParagraphOrder {
  ClassesAsc = 'classes_ASC',
  ClassesDesc = 'classes_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ParagraphText = {
  __typename?: 'ParagraphText';
  json: Scalars['JSON']['output'];
  links: ParagraphTextLinks;
};

export type ParagraphTextAssets = {
  __typename?: 'ParagraphTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ParagraphTextEntries = {
  __typename?: 'ParagraphTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ParagraphTextLinks = {
  __typename?: 'ParagraphTextLinks';
  assets: ParagraphTextAssets;
  entries: ParagraphTextEntries;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  card?: Maybe<Card>;
  cardCollection?: Maybe<CardCollection>;
  carousel?: Maybe<Carousel>;
  carouselCollection?: Maybe<CarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heading?: Maybe<Heading>;
  headingCollection?: Maybe<HeadingCollection>;
  heroSection?: Maybe<HeroSection>;
  heroSectionCollection?: Maybe<HeroSectionCollection>;
  image?: Maybe<Image>;
  imageCollection?: Maybe<ImageCollection>;
  link?: Maybe<Link>;
  linkCollection?: Maybe<LinkCollection>;
  mainPage?: Maybe<MainPage>;
  mainPageCollection?: Maybe<MainPageCollection>;
  meta?: Maybe<Meta>;
  metaCollection?: Maybe<MetaCollection>;
  paragraph?: Maybe<Paragraph>;
  paragraphCollection?: Maybe<ParagraphCollection>;
};

export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryButtonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryButtonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ButtonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ButtonFilter>;
};

export type QueryCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardFilter>;
};

export type QueryCarouselArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarouselFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryHeadingArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryHeadingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeadingFilter>;
};

export type QueryHeroSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryHeroSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroSectionFilter>;
};

export type QueryImageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ImageFilter>;
};

export type QueryLinkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkFilter>;
};

export type QueryMainPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryMainPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MainPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MainPageFilter>;
};

export type QueryMetaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryMetaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetaFilter>;
};

export type QueryParagraphArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryParagraphCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ParagraphOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParagraphFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >;
};

export type CfCardNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCardNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCardNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  linkUrl_contains?: InputMaybe<Scalars['String']['input']>;
  linkUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkUrl_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  linkUrl_not?: InputMaybe<Scalars['String']['input']>;
  linkUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type CfHeroSectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroSectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroSectionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type CfImageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfImageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfImageNestedFilter>>>;
  altText?: InputMaybe<Scalars['String']['input']>;
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  altText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  altText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  altText_not?: InputMaybe<Scalars['String']['input']>;
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  altText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfMetaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMetaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMetaNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogDescription_contains?: InputMaybe<Scalars['String']['input']>;
  ogDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogDescription_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  ogDescription_not?: InputMaybe<Scalars['String']['input']>;
  ogDescription_not_contains?: InputMaybe<
    Scalars['String']['input']
  >;
  ogDescription_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  ogImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  ogTitle_contains?: InputMaybe<Scalars['String']['input']>;
  ogTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogTitle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  ogTitle_not?: InputMaybe<Scalars['String']['input']>;
  ogTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogTitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type Unnamed_1_QueryVariables = Exact<{
  [key: string]: never;
}>;

export type Unnamed_1_Query = {
  __typename?: 'Query';
  headingCollection?: {
    __typename?: 'HeadingCollection';
    items: Array<{
      __typename?: 'Heading';
      text?: string | null;
      type?: string | null;
      isBold?: boolean | null;
      sys: { __typename?: 'Sys'; id: string };
    } | null>;
  } | null;
};
