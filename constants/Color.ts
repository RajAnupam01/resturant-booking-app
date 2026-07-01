const tintColorLight = "#005EA6"; // MI Electric Royal Blue
const tintColorDark = "#FFD700";  // Vibrant Laser Gold
const primary = "#E6B800";        // Deep Royal Blue (Main Brand Color)
const secondary = "#004B87";      // Metallic Gold Accent

export const Colors = {
    light: {
        text: "#001F3F",           // Ultra-dark blue instead of flat black for a premium feel
        background: "#FFFFFF",     // Clean white base
        tint: tintColorLight,
        icon: "#64748B",           // Cool slate gray for inactive items
        tabIconDefault: "#64748B",
        tabIconSelected: tintColorLight // Active tab glows in Royal Blue
    },
    dark: {
        text: "#F0F4F8",           // Crisp, bright off-white text
        background: "#0A1118",     // Sleek midnight dark-mode background
        tint: tintColorDark,
        icon: "#4A5568",
        tabIconDefault: "#4A5568",
        tabIconSelected: tintColorDark  // Active dark tab glows in Gold
    },
    PRIMARY: primary,
    SECONDARY: secondary
};