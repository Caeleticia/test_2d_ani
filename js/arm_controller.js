/**
 * 动作切换控制器
 * @param {string} actionName - 动作名称
 */
function setArmAction(actionName) {
    // 1. 重置所有动作图层为隐藏状态
    const armLayers = document.querySelectorAll('.arm-layer');
    armLayers.forEach(layer => {
        layer.classList.remove('active');
        layer.classList.add('hidden');
    });

    // 2. 根据选中的动作，激活对应的图层
    switch (actionName) {
        case 'default':
            // 默认状态：双手自然下垂
            document.getElementById('arm_lower_L').classList.replace('hidden', 'active');
            document.getElementById('arm_lower_R').classList.replace('hidden', 'active');
            break;

        case 'wave':
            // 招手：左手自然下垂，右手扬起，可能需要特定的右手图
            document.getElementById('arm_lower_L').classList.replace('hidden', 'active');
            // 假设你有一张右手扬起的图 arm_upper_R
            const waveArm = document.getElementById('arm_upper_R');
            if (waveArm) waveArm.classList.replace('hidden', 'active');
            break;

        case 'hands_on_hips':
            // 叉腰：右手自然下垂（或另一种状态），左手弯曲，并显示配套的袖子
            document.getElementById('arm_lower_R').classList.replace('hidden', 'active');
            
            const bentArm = document.getElementById('arm_upper_L_bend');
            if (bentArm) bentArm.classList.replace('hidden', 'active');
            
            const sleeve = document.getElementById('sleeve_upper_L');
            if (sleeve) sleeve.classList.replace('hidden', 'active');
            break;

        default:
            console.warn(`未知的动作: ${actionName}`);
    }
}

// ================= 眨眼功能 =================
let isBlinkingEnabled = false;

/**
 * 开启/关闭眨眼效果
 */
function toggleBlink() {
    isBlinkingEnabled = !isBlinkingEnabled;
    const stage = document.getElementById('stage');
    
    if (isBlinkingEnabled) {
        // 给舞台添加一个类，触发 CSS 动画
        stage.classList.add('blinking');
        console.log("眨眼已开启");
    } else {
        stage.classList.remove('blinking');
        console.log("眨眼已关闭");
    }
}

// 页面初始化
window.onload = () => {
    // 默认执行站立动作
    setArmAction('default');
    
    // 默认开启眨眼
    toggleBlink();
};
