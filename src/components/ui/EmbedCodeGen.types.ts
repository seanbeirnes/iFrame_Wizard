export type ProfileSettings = {
    name: string;
    allow_accelerometer: { used: boolean; active: boolean };
    allow_autoplay: { used: boolean; active: boolean };
    allow_clipboard_write: { used: boolean; active: boolean };
    allow_encrypted_media: { used: boolean; active: boolean };
    allow_gyroscope: { used: boolean; active: boolean };
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