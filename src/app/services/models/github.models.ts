export interface Results {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}

export interface User {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: any;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
}
