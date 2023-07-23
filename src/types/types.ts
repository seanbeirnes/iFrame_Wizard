export type ProfileSettings = {
    name: string;
    allow_accelerometer: { used: boolean; active: boolean };
    allow_autoplay: { used: boolean; active: boolean };
    allow_camera: { used: boolean; active: boolean };
    allow_clipboard_write: { used: boolean; active: boolean };
    allow_encrypted_media: { used: boolean; active: boolean };
    allow_gyroscope: { used: boolean; active: boolean };
    allow_microphone: { used: boolean; active: boolean };
    allow_picture_in_picture: { used: boolean; active: boolean };
    allow_web_share: { used: boolean; active: boolean };
    allow_fullscreen: { used: boolean; active: boolean };
    use_modest_branding: { used: boolean; active: boolean };
    turn_off_related_videos: { used: boolean; active: boolean };
    use_custom_properties: { used: boolean; active: boolean };
    }
    
export type ProfileSettingsData = {
        [key: string]: ProfileSettings
    }

export type FormPropsData = {
    [index: string]: boolean | string;
    name: string;
    allow_accelerometer: boolean;
    allow_autoplay: boolean;
    allow_camera: boolean;
    allow_camera_allow_list: string;
    allow_clipboard_write: boolean;
    allow_encrypted_media: boolean;
    allow_gyroscope: boolean;
    allow_microphone: boolean;
    allow_microphone_allow_list: string;
    allow_picture_in_picture: boolean;
    allow_web_share: boolean;
    allow_fullscreen: boolean;
    allow_fullscreen_allow_list: string;
    player_max_size: string;
    player_max_size_width: string;
    player_max_size_height: string;
    use_modest_branding: boolean;
    turn_off_related_videos: boolean;
    use_custom_props: boolean;
    use_custom_props_value: string;
    url: string;
}

export type EmbedCodeResponse = {
    [index: string]: boolean | string;
}