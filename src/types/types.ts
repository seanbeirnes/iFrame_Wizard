export type TemplateComponent = {
    type: string;
    label: string;
    id: string;
    place_holder: string;
    show_more: boolean;
    active: boolean;
};
  
export type Template = {
    id: string;
    name: string;
    componenets: TemplateComponent[];
};

export type TemplatesData = {
    [key: string]: Template
}

export type FormPropsData = {
    [index: string]: boolean | string;
    name: string;
    allow_accelerometer: boolean;
    allow_autoplay: boolean;
    allow_camera: boolean;
    allow_camera_text: string;
    allow_clipboard_write: boolean;
    allow_encrypted_media: boolean;
    allow_gyroscope: boolean;
    allow_microphone: boolean;
    allow_microphone_text: string;
    allow_picture_in_picture: boolean;
    allow_web_share: boolean;
    allow_fullscreen: boolean;
    allow_fullscreen_text: string;
    player_max_size: string;
    player_max_size_width: string;
    player_max_size_height: string;
    use_modest_branding: boolean;
    turn_off_related_videos: boolean;
    use_custom_props: boolean;
    use_custom_props_text: string;
    url: string;
}

export type EmbedCodeResponse = {
    [index: string]: boolean | string;
}