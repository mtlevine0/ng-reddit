export interface Source {
    url: string;
    width: number;
    height: number;
}

export interface Resolution {
    url: string;
    width: number;
    height: number;
}

export interface Variants {
}

export interface Image {
    source: Source;
    resolutions: Resolution[];
    variants: Variants;
    id: string;
}

export interface Preview {
    images: Image[];
    enabled: boolean;
}

export interface SecureMediaEmbed {
}

export interface MediaEmbed {
}

export interface Data2 {
    is_crosspostable: boolean;
    subreddit_id: string;
    approved_at_utc?: any;
    mod_reason_by?: any;
    banned_by?: any;
    removal_reason?: any;
    thumbnail_width: number;
    subreddit: string;
    selftext_html?: any;
    selftext: string;
    likes?: any;
    suggested_sort?: any;
    mod_note?: any;
    user_reports: any[];
    secure_media?: any;
    is_reddit_media_domain: boolean;
    saved: boolean;
    id: string;
    banned_at_utc?: any;
    mod_reason_title?: any;
    view_count?: any;
    archived: boolean;
    clicked: boolean;
    no_follow: boolean;
    author: string;
    num_crossposts: number;
    link_flair_text?: any;
    can_mod_post: boolean;
    send_replies: boolean;
    pinned: boolean;
    score: number;
    approved_by?: any;
    over_18: boolean;
    domain: string;
    hidden: boolean;
    preview: Preview;
    num_comments: number;
    thumbnail: string;
    hide_score: boolean;
    edited: boolean;
    link_flair_css_class?: any;
    author_flair_css_class?: any;
    contest_mode: boolean;
    gilded: number;
    locked: boolean;
    downs: number;
    brand_safe: boolean;
    subreddit_subscribers: number;
    secure_media_embed: SecureMediaEmbed;
    media_embed: MediaEmbed;
    post_hint: string;
    stickied: boolean;
    can_gild: boolean;
    thumbnail_height: number;
    parent_whitelist_status: string;
    name: string;
    spoiler: boolean;
    permalink: string;
    subreddit_type: string;
    whitelist_status: string;
    report_reasons?: any;
    created: number;
    url: string;
    author_flair_text?: any;
    quarantine: boolean;
    title: string;
    created_utc: number;
    subreddit_name_prefixed: string;
    distinguished?: any;
    media?: any;
    upvote_ratio: number;
    mod_reports: any[];
    is_self: boolean;
    visited: boolean;
    num_reports?: any;
    is_video: boolean;
    ups: number;
    body: string;
    link_id: string;
    replies: any;
    parent_id: string;
    author_cakeday?: boolean;
    collapsed?: boolean;
    is_submitter?: boolean;
    collapsed_reason: string;
    body_html: string;
    score_hidden?: boolean;
    controversiality?: number;
    depth?: number;
}

export interface Child {
    kind: string;
    data: Data2;
}

export interface Data {
    after?: any;
    whitelist_status: string;
    modhash: string;
    dist?: number;
    children: Child[];
    before?: any;
}

export interface Post {
    kind: string;
    data: Data;
}

