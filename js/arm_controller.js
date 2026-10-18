/**
 * 切换角色手臂动作
 * @param {number} actionId - 动作编号 (0, 1, 2, 3...)
 */
function changeArm(actionId) {
    // 1. 获取所有的动作图层（胳膊+配套袖子）
    const armLayers = document.querySelectorAll('.arm-layer');
    
    // 2. 移除所有的 active 类（隐藏）
    armLayers.forEach(layer => {
        layer.classList.remove('active');
    });

    // 3. 单独处理手臂的显示
    const targetArm = document.getElementById(`arm-${actionId}`);
    if (targetArm) {
        targetArm.classList.add('active');
    }

    // 4. 针对特殊动作绑定额外的部件（比如动作3需要佩戴袖子）
    if (actionId === 3) {
        const sleeve = document.getElementById('sleeve-3');
        if (sleeve) sleeve.classList.add('active');
    }
}

// 页面加载完毕后，默认执行动作0（站立）
window.onload = () => {
    changeArm(0);
};
