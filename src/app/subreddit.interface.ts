
export interface Subreddit {
    kind: string;
    data: Data;
  }
  export interface Data {
    after: string;
    dist: number;
    modhash: string;
    whitelist_status: string;
    children?: (ChildrenEntity)[] | null;
    before?: null;
  }
  export interface ChildrenEntity {
    kind: string;
    data: Data1;
  }
  export interface Data1 {
    subreddit_id: string;
    approved_at_utc?: null;
    send_replies: boolean;
    mod_reason_by?: null;
    banned_by?: null;
    num_reports?: null;
    removal_reason?: null;
    thumbnail_width?: number | null;
    subreddit: string;
    selftext_html?: string | null;
    selftext: string;
    likes?: null;
    suggested_sort?: null;
    user_reports?: (null)[] | null;
    secure_media?: null;
    is_reddit_media_domain: boolean;
    saved: boolean;
    id: string;
    banned_at_utc?: null;
    mod_reason_title?: null;
    view_count?: null;
    archived: boolean;
    clicked: boolean;
    no_follow: boolean;
    author: string;
    num_crossposts: number;
    link_flair_text?: string | null;
    mod_reports?: (null)[] | null;
    can_mod_post: boolean;
    is_crosspostable: boolean;
    pinned: boolean;
    score: number;
    approved_by?: null;
    over_18: boolean;
    report_reasons?: null;
    domain: string;
    hidden: boolean;
    thumbnail: string;
    edited: boolean | number;
    link_flair_css_class?: string | null;
    author_flair_css_class?: string | null;
    contest_mode: boolean;
    gilded: number;
    downs: number;
    brand_safe: boolean;
    secure_media_embed: SecureMediaEmbedOrMediaEmbedOrVariants;
    media_embed: SecureMediaEmbedOrMediaEmbedOrVariants;
    author_flair_text?: string | null;
    stickied: boolean;
    visited: boolean;
    can_gild: boolean;
    thumbnail_height?: number | null;
    parent_whitelist_status: string;
    name: string;
    spoiler: boolean;
    permalink: string;
    subreddit_type: string;
    locked: boolean;
    hide_score: boolean;
    created: number;
    url: string;
    whitelist_status: string;
    quarantine: boolean;
    subreddit_subscribers: number;
    created_utc: number;
    subreddit_name_prefixed: string;
    ups: number;
    media?: null;
    num_comments: number;
    is_self: boolean;
    title: string;
    mod_note?: null;
    is_video: boolean;
    distinguished?: null;
    preview?: Preview | null;
    post_hint?: string | null;
    previous_visits?: (null)[] | null;
  }
  export interface SecureMediaEmbedOrMediaEmbedOrVariants {
  }
  export interface Preview {
    images?: (ImagesEntity)[] | null;
    enabled: boolean;
  }
  export interface ImagesEntity {
    source: ResolutionsEntityOrSource;
    resolutions?: (ResolutionsEntityOrSource)[] | null;
    variants: SecureMediaEmbedOrMediaEmbedOrVariants;
    id: string;
  }
  export interface ResolutionsEntityOrSource {
    url: string;
    width: number;
    height: number;
  }
  