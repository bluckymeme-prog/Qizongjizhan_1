// 招式 Action 枚举定义
const Action = {
    CHARGE: 'CHARGE', SWORD: 'SWORD', ICE_SWORD: 'ICE_SWORD', ELEC_SWORD: 'ELEC_SWORD',
    FIRE: 'FIRE', BARRIER: 'BARRIER', SHIELD: 'SHIELD', LIGHTNING: 'LIGHTNING',
    HOLY_SHIELD: 'HOLY_SHIELD', STEAL: 'STEAL', MERCY_DEW: 'MERCY_DEW',
    METAL_STORM: 'METAL_STORM'
};

const roleProfiles = {
    PRIEST: {
        name: '牧师',
        faction: '十字星教会',
        factionKey: 'cruxstar',
        image: 'assets/images/priest com.webp',
        skillName: '慈露',
        description: '接受十字星女神生命圣水庇佑的牧师，平日里负责传播十字星教的教义，作战时也会成为治疗前线士兵的最强后盾。可别被他们矜持的样子迷惑了，扛起重型大剑对他们来说不在话下。',
        skill: '消耗一点气使用，使用时视为圣盾效果，并恢复自身一点生命值。全局限用一次。'
    },
    WARRIOR: {
        name: '战士',
        faction: '纳亚帝国',
        factionKey: 'naya',
        image: 'assets/images/warrior com.webp',
        skillName: '武器大师',
        description: '上一代十字星剑士，接受过各种武器的高强度训练。因为某些特殊原因，一小部分剑士逃出了教会的控制。如今他们来到纳亚帝国，接受帝国训练，已经成为反抗教会的重要力量。',
        skill: '额外拥有一把刀。'
    },
    PALADIN: {
        name: '圣骑士',
        faction: '十字星教会',
        factionKey: 'cruxstar',
        image: 'assets/images/knight com transparent.webp',
        skillName: '战神之盾',
        description: '受十字星女神战神之盾庇护的骑士，是十字星骑士团的中坚力量，身负强大的屏障装置。骑士团冲锋陷阵，在战场上所向披靡。',
        skill: '额外拥有一层屏障；本局第一次使用圣盾不消耗气，且该圣盾抵挡普通刀时会将其震碎。'
    },
    ROGUE: {
        name: '盗贼',
        faction: '禅摩达克部落联盟',
        factionKey: 'chanmadak',
        image: 'assets/images/burglar com.webp',
        skillName: '神偷',
        description: '来自禅摩达克的神秘盗贼组织。他们神出鬼没，收钱办事，直到死去都鲜有外人知道他们的名字。最可怕的是腰间的锦囊，能够幻化出领域，将周围的气全部吸走。除了气之外，也要小心自己的钱。',
        skill: '若对方正在集气，将对方的气偷到自己身上；使用时视为圣盾效果。全局限用一次。'
    },
    BARBARIAN: {
        name: '野蛮人',
        faction: '贺申共和国',
        factionKey: 'heshen',
        image: 'assets/images/barbarian com.webp',
        skillName: '强韧体魄',
        description: '来自贺申共和国的冲锋士兵。他们英勇善战、不畏牺牲，拥有强大的肉体，却不擅长运用气的招式。对他们来说，斧子和刀或许更加管用。',
        skill: '开局额外增加一点生命值，但初始气比其他职业少一点。'
    },
    METAL_WARRIOR: {
        name: '金属武者',
        faction: '禅摩达克部落联盟',
        factionKey: 'chanmadak',
        image: 'assets/images/metal com.webp',
        skillName: '刀盾互生',
        description: '来自禅摩达克一些部落的僧侣，能够熟练掌控金属与粒子武器。在刀或屏障被击碎后，他们会将碎片转化为另一种形态继续战斗，以达到攻防平衡。至于为什么不用碎刀再造一把新刀，可能是他们真的很喜欢平衡。',
        skill: '刀被击碎后增加一层屏障；屏障被击碎后增加一把刀。自身的刀或屏障被击碎时获得金属点数，最多4层；每局可消耗1气释放一次金属风暴，对单体造成等同点数的法术伤害并清空点数，可被屏障、盾牌、圣盾或冰刀抵挡。'
    }
};

// 势力背景数据字典
const factionLore = {
    cruxstar: {
        name: "十字星领地 (The Cruxstar Realms)",
        desc: "十字星教不仅是精神领袖，更是大陆中北部的绝对统治者。他们掌握着最纯粹且霸道的“圣光之气”，并建立起了一支战无不胜的骑士团。在他们眼中，一切不受教会管辖的“气”都是异端，他们正试图用信仰和武力统一整个大陆。"
    },
    naya: {
        name: "纳亚帝国 (The Naya Empire)",
        desc: "盘踞在大陆东部的古老帝国，底蕴深厚。他们对“气”的理解更偏向于“源流与自然”的融合。古老的阵法与固若金汤的城池是他们对抗十字星教东扩的最大底气。任何敢于踏入纳亚领土的侵略者，都会面临深渊般的古老怒火。"
    },
    heshen: {
        name: "贺申共和国 (The Heshen Republic)",
        desc: "位于大陆最西端的冰封之国，由自由民与破冰者建立。恶劣的自然环境铸就了他们如同钢铁般坚毅的灵魂。贺申人擅长驾驭“极寒之气”，能将风雪化为最锐利的冰刃。他们的高墙在风雪中屹立不倒，是阻挡十字星教西进的最强壁垒。"
    },
    chanmadak: {
        name: "禅摩达克部落联盟 (The Chanmadak Tribal Alliance)",
        desc: "南部漫漫黄沙中生存的狂野游击大师。他们将“气”与狂风黄沙完美结合，在严酷的环境中生生不息。尽管内部常常为了绿洲资源争吵，但在面对十字星教的入侵时，这片沙漠上的所有部落总能爆发出牢不可破的团结。"
    }
};

// 玩家类 (原生 JS 版本)
class Player {
    constructor(id, name = "") {
        this.id = id;
        this.name = name;
        this.role = 'WARRIOR'; 
        this.reset();
    }
     reset() {
        this.hp = 4; this.energy = 2; this.barrierCount = 1; this.swordCount = 1; // 👈 这里将 3 改为 4       
        this.swordState = 'NORMAL'; this.isParalyzed = false; this.nextTurnParalyze = false;
        this.currentAction = null; this.hasStolen = false; this.hasHealed = false;
        this.publicActionHistory = [];
        this.aiStyle = null;
        this.aiPressureVariant = null;
        this.aiRound = 0;
        this.isCpuControlled = false;
        this.hasBrokenSword = false; // 记录圣骑士是否已消耗碎刀特权
        this.hasUsedFreeHolyShield = false;
        this.hasUsedMetalStorm = false;
        this.metalPoints = 0;
        this.specialSwordCharges = 0;
        
        // 职业特性重载 (牧师、金属武者初始属性默认: 2血 1气 1刀 1盾)
        if (this.role === 'BARBARIAN') { this.hp = 5; this.energy = 1; }
        else if (this.role === 'PALADIN') { this.barrierCount = 2; } 
        else if (this.role === 'WARRIOR') { this.swordCount = 2; }
        
        // 记录最大生命值，防止慈露回复溢出
        this.maxHp = this.hp;
    }
    getRoleName() {
        const map = { BARBARIAN: '野蛮人', ROGUE: '盗贼', PALADIN: '圣骑士', WARRIOR: '战士', PRIEST: '牧师', METAL_WARRIOR: '金属武者' };
        return map[this.role];
    }
    canUse(action) {
        if (this.hp <= 0) return false;
        if (this.isParalyzed) return action === Action.CHARGE;
        switch (action) {
            case Action.CHARGE: return true;
            case Action.SWORD: return this.swordCount > 0 && this.swordState !== 'UNLOCKED';
            case Action.ICE_SWORD:
            case Action.ELEC_SWORD: return this.swordState === 'UNLOCKED' && this.swordCount > 0 && this.energy >= 1;
            case Action.FIRE: return this.energy >= 2;
            case Action.LIGHTNING: return this.energy >= 4;
            case Action.BARRIER: return this.barrierCount > 0; 
            case Action.SHIELD: return true;
            case Action.HOLY_SHIELD: return this.energy >= 1 || (this.role === 'PALADIN' && !this.hasUsedFreeHolyShield);
            case Action.STEAL: return this.role === 'ROGUE' && !this.hasStolen; 
            case Action.MERCY_DEW: return this.role === 'PRIEST' && !this.hasHealed && this.energy >= 1; 
            case Action.METAL_STORM: return this.role === 'METAL_WARRIOR' && !this.hasUsedMetalStorm && this.metalPoints > 0 && this.energy >= 1;
            default: return false;
        }
    }
}

// 网页游戏控制器
class Game {
    constructor() {
        this._aiRandomState = ((Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0) || 0x6d2b79f5;
        this.playerA = new Player('A', '玩家A');
        this.playerB = new Player('B', '机甲Z CPU');
        this.playerC = new Player('C', '队友');
        this.playerD = new Player('D', 'CPU 队友');
        this.gameMode = '1v1';
        this.cpuDifficulty = 'normal';
        this.pendingHumanIndex = 0;
        this.pendingTargetAction = null;
        this.roundLog = "等待勇士输入姓名与选择职业...";
        this.battleResult = null;
        this.matchScore = { A: 0, B: 0 };
        this.matchRound = 1;
        this.transitioningRound = false;
        this.roundAdvanceTimer = null;
        this.roundBannerTimer = null;
        this.initGame();
    }

    initLegacyGame() {
        const loginScreen = document.getElementById('login-screen');
        const startBtn = document.getElementById('start-game-btn');
        const usernameInput = document.getElementById('username-input');
        const roleASelect = document.getElementById('role-a');
        const roleBSelect = document.getElementById('role-b');

        this.initLegacyRoleSelection(roleASelect, roleBSelect);

        if (usernameInput) {
            usernameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') startBtn.click();
            });
        }
        
        startBtn.onclick = () => {
            const nameVal = usernameInput ? usernameInput.value.trim() : "";
            this.playerA.name = nameVal || "无名勇者";
            this.playerA.role = roleASelect ? roleASelect.value : 'WARRIOR';
            this.playerB.role = roleBSelect ? roleBSelect.value : 'WARRIOR';
            
            this.playerA.reset();
            this.playerB.reset();
            
            loginScreen.style.display = 'none';
            this.startLegacyClassicGame();
        };
    }

    initLegacyRoleSelection(roleAInput, roleBInput) {
        const grid = document.getElementById('role-card-grid');
        const modal = document.getElementById('role-detail-modal');
        if (!grid || !modal) return;

        const tabs = [...document.querySelectorAll('.role-target-tab')];
        const closeBtn = document.getElementById('close-role-detail');
        const confirmBtn = document.getElementById('confirm-role-btn');
        const playerSummary = document.getElementById('player-role-summary');
        const cpuSummary = document.getElementById('cpu-role-summary');
        let activeTarget = 'player';
        let previewRole = 'WARRIOR';

        grid.innerHTML = Object.entries(roleProfiles).map(([role, profile]) => `
            <button class="role-card faction-${profile.factionKey}" type="button" data-role="${role}" aria-label="查看${profile.name}详情">
                <span class="role-card-check">✓</span>
                <span class="role-card-art">
                    <img class="role-card-image" src="${profile.image}" alt="${profile.name}" loading="lazy" decoding="async">
                    <span class="role-card-image-label">
                        <strong>${profile.name}</strong>
                        <small>${profile.faction}</small>
                    </span>
                </span>
            </button>
        `).join('');

        const updateCards = () => {
            const selectedRole = activeTarget === 'player' ? roleAInput.value : roleBInput.value;
            grid.querySelectorAll('.role-card').forEach(card => {
                const selected = card.dataset.role === selectedRole;
                card.classList.toggle('selected', selected);
                card.setAttribute('aria-pressed', String(selected));
            });
        };

        const closeModal = () => {
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
        };

        const openModal = role => {
            const profile = roleProfiles[role];
            previewRole = role;
            document.getElementById('role-detail-image').src = profile.image;
            document.getElementById('role-detail-image').alt = profile.name;
            document.getElementById('role-detail-name').textContent = profile.name;
            document.getElementById('role-detail-faction').textContent = profile.faction;
            document.getElementById('role-detail-description').textContent = profile.description;
            document.getElementById('role-detail-skill-name').textContent = profile.skillName;
            document.getElementById('role-detail-skill').textContent = profile.skill;
            document.querySelector('.role-detail-visual').className = `role-detail-visual faction-${profile.factionKey}`;
            confirmBtn.textContent = activeTarget === 'player' ? '选择为我的角色' : '选择为 CPU 角色';
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            closeBtn.focus();
        };

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                activeTarget = tab.dataset.target;
                tabs.forEach(item => {
                    const active = item === tab;
                    item.classList.toggle('active', active);
                    item.setAttribute('aria-selected', String(active));
                });
                updateCards();
            });
        });

        grid.addEventListener('click', event => {
            const card = event.target.closest('.role-card');
            if (card) openModal(card.dataset.role);
        });

        confirmBtn.addEventListener('click', () => {
            const profile = roleProfiles[previewRole];
            if (activeTarget === 'player') {
                roleAInput.value = previewRole;
                playerSummary.textContent = profile.name;
            } else {
                roleBInput.value = previewRole;
                cpuSummary.textContent = profile.name;
            }
            updateCards();
            closeModal();
        });

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', event => {
            if (event.target === modal) closeModal();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        });

        updateCards();
    }

    startLegacyClassicGame() {
        this.bindLegacyClassicActionEvents();
        const restartBtn = document.getElementById('restart-btn');
        restartBtn.onclick = () => {
            this.playerA.reset();
            this.playerB.reset();
            this.battleResult = null;
            this.roundLog = "游戏重置！新对决开始。";
            restartBtn.classList.add('hidden');
            this.updateUI();
        };
        this.battleResult = null;
        this.roundLog = `对决开始！${this.playerA.name} [${this.playerA.getRoleName()}] VS 机甲Z CPU [${this.playerB.getRoleName()}]`;
        this.updateUI();
    }

    bindLegacyClassicActionEvents() {
        const container = document.getElementById('actions-a');
        const subContainer = document.getElementById('sub-actions-a');
        
        container.onclick = (e) => {
            const action = e.target.dataset.action;
            if (action === 'SWORD' && this.playerA.swordState === 'UNLOCKED' && !this.playerA.isParalyzed) {
                subContainer.classList.remove('hidden');
                return;
            }
            if (!action || !this.playerA.canUse(action)) return;
            this.lockLegacyClassicAction(action, subContainer);
        };

        subContainer.onclick = (e) => {
            const action = e.target.dataset.action;
            if (!action || !this.playerA.canUse(action)) return;
            this.lockLegacyClassicAction(action, subContainer);
        };
    }

    lockLegacyClassicAction(action, subContainer) {
        this.playerA.currentAction = action;
        subContainer.classList.add('hidden');
        this.updateUI(); 
        
        // 延迟模拟思考
        setTimeout(() => {
            this.cpuLegacyClassicDecision();
            if (['PRIEST', 'WARRIOR', 'ROGUE', 'METAL_WARRIOR', 'BARBARIAN', 'PALADIN'].includes(this.playerB.role)) {
                this.updateUI();
                setTimeout(() => this.resolveRound(), 500);
            } else {
                this.resolveRound();
            }
        }, 400);
    }

    cpuLegacyClassicDecision() {
        const cpu = this.playerB;
        if (cpu.isParalyzed) { cpu.currentAction = Action.CHARGE; return; }

        const validActions = [];
        Object.keys(Action).forEach(key => { if (cpu.canUse(Action[key])) validActions.push(Action[key]); });

        const weights = {};
        validActions.forEach(act => { weights[act] = 1; }); 
        if (validActions.includes(Action.LIGHTNING)) weights[Action.LIGHTNING] = 5; 
        if (validActions.includes(Action.FIRE)) weights[Action.FIRE] = 3;           
        if (this.playerA.isParalyzed && validActions.includes(Action.FIRE)) weights[Action.FIRE] = 8; 
        if (validActions.includes(Action.ICE_SWORD)) weights[Action.ICE_SWORD] = 4;
        if (validActions.includes(Action.ELEC_SWORD)) weights[Action.ELEC_SWORD] = 4;
        if (this.playerA.energy >= 4 && validActions.includes(Action.HOLY_SHIELD)) weights[Action.HOLY_SHIELD] = 8;
        if (validActions.includes(Action.STEAL)) weights[Action.STEAL] = 6; 
        
        // CPU受伤且可以使用慈露且有气时，极大提高使用概率
        if (validActions.includes(Action.MERCY_DEW)) {
            weights[Action.MERCY_DEW] = (cpu.hp < cpu.maxHp) ? 12 : 1; 
        }

        let totalWeight = 0;
        validActions.forEach(act => { totalWeight += weights[act]; });
        let randomNum = Math.random() * totalWeight;
        let selectedAction = validActions[0];

        for (let act of validActions) {
            randomNum -= weights[act];
            if (randomNum <= 0) { selectedAction = act; break; }
        }
        cpu.currentAction = selectedAction;
    }

    getCharacterAnimationState(role, action) {
        const attackActions = [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.LIGHTNING, Action.METAL_STORM];
        const shieldActions = [Action.BARRIER, Action.SHIELD, Action.HOLY_SHIELD];
        if (role === 'PRIEST') shieldActions.push(Action.MERCY_DEW);
        if (action === Action.CHARGE || (['ROGUE', 'METAL_WARRIOR', 'BARBARIAN', 'PALADIN'].includes(role) && action === Action.STEAL)) return 'charge';
        if (attackActions.includes(action)) return 'attack';
        if (shieldActions.includes(action)) return 'shield';
        return 'idle';
    }

    updateBattleAvatar(avatar, player, fallback, result) {
        const spriteRoles = { PRIEST: 'priest', WARRIOR: 'warrior', ROGUE: 'burglar', METAL_WARRIOR: 'metal', BARBARIAN: 'barbarian', PALADIN: 'knight' };
        const spriteClasses = ['priest-sprite', 'warrior-sprite', 'burglar-sprite', 'metal-sprite', 'barbarian-sprite', 'knight-sprite'];
        Object.values(spriteRoles).forEach(prefix => {
            ['attack', 'shield', 'idle', 'charge', 'victory', 'defeat'].forEach(state => {
                spriteClasses.push(`${prefix}-${state}`);
            });
        });

        const spriteRole = spriteRoles[player.role];
        if (!spriteRole) {
            avatar.classList.remove(...spriteClasses);
            avatar.removeAttribute('data-sprite-state');
            avatar.removeAttribute('data-sprite-role');
            avatar.textContent = fallback;
            return;
        }

        const state = result || (player.hp <= 0 ? 'defeat' : this.getCharacterAnimationState(player.role, player.currentAction));
        const stateClass = `${spriteRole}-${state}`;
        if (avatar.dataset.spriteRole === spriteRole
            && avatar.dataset.spriteState === state
            && avatar.classList.contains(stateClass)) {
            return;
        }

        avatar.textContent = '';
        avatar.classList.remove(...spriteClasses);
        avatar.classList.add(`${spriteRole}-sprite`);
        avatar.classList.add(stateClass);
        avatar.setAttribute('aria-label', `${player.name} ${player.getRoleName()}`);
        avatar.dataset.spriteRole = spriteRole;
        avatar.dataset.spriteState = state;
    }

    updateClassicDuelUI() {
        const pA = this.playerA; const pB = this.playerB;
        const setHTML = (id, value) => {
            const element = document.getElementById(id);
            if (element && element.innerHTML !== value) element.innerHTML = value;
        };
        const setText = (id, value) => {
            const element = document.getElementById(id);
            if (element && element.textContent !== value) element.textContent = value;
        };
        setText('name-display-a', `${pA.name} [${pA.getRoleName()}]`);
        setText('name-display-b', `🤖 CPU [${pB.getRoleName()}]`);
        this.updateBattleAvatar(document.querySelector('.p1-avatar'), pA, '🤺', this.battleResult?.playerA);
        this.updateBattleAvatar(document.querySelector('.p2-avatar'), pB, '🤖', this.battleResult?.playerB);

        const renderHP = (hp) => hp <= 0 ? '<span style="font-size:18px;">💀</span>' : '<span class="icon heart">❤️</span>'.repeat(hp);
        const renderEnergy = (en) => en <= 0 ? '<span class="empty-text">空</span>' : '<div class="energy-circle"></div>'.repeat(en);
        const renderBarrier = (count) => count > 0 ? '<span class="icon active">🛡️</span>'.repeat(count) : `<span class="icon inactive">🛡️</span> <span class="empty-text">破碎</span>`;
        const renderSword = (count, state) => {
            if (state === 'BROKEN' || count <= 0) return `<span class="icon inactive">🗡️</span> <span class="empty-text">震碎</span>`;
            const suffix = state === 'UNLOCKED' ? '<span class="unlocked-text">[觉醒]</span>' : '';
            return '<span class="icon active">🗡️</span>'.repeat(count) + suffix;
        };
        const renderMetalPoints = player => player.role === 'METAL_WARRIOR'
            ? `<span class="metal-points">⚙ ${player.metalPoints || 0}/4</span>`
            : '';
        const renderParalysis = (isPara) => isPara ? `<span class="icon paralyzed">⚡</span> <span class="para-text">麻痹中</span>` : `<span class="icon inactive">⚡</span>`;

        setHTML('hp-a', renderHP(pA.hp));
        setHTML('energy-a', renderEnergy(pA.energy));
        setHTML('barrier-a', renderBarrier(pA.barrierCount));
        setHTML('sword-a', renderSword(pA.swordCount, pA.swordState));
        setHTML('metal-points-a', renderMetalPoints(pA));
        setHTML('paralysis-a', renderParalysis(pA.isParalyzed));

        setHTML('hp-b', renderHP(pB.hp));
        setHTML('energy-b', renderEnergy(pB.energy));
        setHTML('barrier-b', renderBarrier(pB.barrierCount));
        setHTML('sword-b', renderSword(pB.swordCount, pB.swordState));
        setHTML('metal-points-b', renderMetalPoints(pB));
        setHTML('paralysis-b', renderParalysis(pB.isParalyzed));

        // 专属技能按钮显示控制
        const stealBtn = document.getElementById('steal-btn-a');
        stealBtn.style.display = pA.role === 'ROGUE' ? 'inline-block' : 'none';
        
        const healBtn = document.getElementById('heal-btn-a');
        healBtn.style.display = pA.role === 'PRIEST' ? 'inline-block' : 'none';

        const metalStormBtn = document.getElementById('metal-storm-btn-a');
        if (metalStormBtn) metalStormBtn.style.display = pA.role === 'METAL_WARRIOR' ? 'inline-block' : 'none';

        const logText = document.getElementById('log-text');
        const logChanged = logText.textContent !== this.roundLog;
        if (logChanged) logText.textContent = this.roundLog;

        const logContainer = document.getElementById('log-container');
        if (logChanged) logContainer.scrollTop = logContainer.scrollHeight;

        const lockA = document.getElementById('lock-status-a'); 
        const lockB = document.getElementById('lock-status-b');
        
        if (pA.hp > 0 && pB.hp > 0) {
            if (pA.isParalyzed) { lockA.innerText = "⚡ 遭麻痹"; lockA.classList.remove('hidden'); }
            else if (pA.currentAction) { lockA.innerText = "🔒 已锁定"; lockA.classList.remove('hidden'); }
            else { lockA.innerText = "等待中..."; lockA.classList.add('hidden'); }

            if (pB.isParalyzed) { lockB.innerText = "⚡ 遭麻痹"; }
            else if (pB.currentAction) { lockB.innerText = "🔒 已锁定"; }
            else { lockB.innerText = "思考中..."; }

            const buttons = document.querySelectorAll('#control-panel button.action-btn');
            buttons.forEach(btn => {
                const action = btn.dataset.action;
                if (action) {
                    const isSwordMenu = action === Action.SWORD && pA.swordState === 'UNLOCKED' && pA.swordCount > 0 && !pA.isParalyzed;
                    btn.disabled = pA.currentAction != null || (!isSwordMenu && !this.canUseAction(pA, action));
                }
            });
        } else {
            lockA.classList.add('hidden'); lockB.classList.add('hidden');
            document.querySelectorAll('#control-panel button.action-btn').forEach(b => b.disabled = true);
        }
    }

    getActionName(action) {
        const names = { CHARGE: '集气', SWORD: '普通刀', ICE_SWORD: '冰刀', ELEC_SWORD: '电刀', FIRE: '火冲', BARRIER: '屏障', SHIELD: '盾牌', LIGHTNING: '狂雷', HOLY_SHIELD: '圣盾', STEAL: '神偷', MERCY_DEW: '慈露', METAL_STORM: '金属风暴' };
        return names[action] || action;
    }

    shouldElecParalyze(defenseAction) {
        return [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(defenseAction);
    }

    resolveClassicDuelRound() {
        const pA = this.playerA; const pB = this.playerB;
        const actA = pA.currentAction; const actB = pB.currentAction;
        let log = `【回合结算】\n${pA.name} 选择了 [${this.getActionName(actA)}] ｜ CPU 选择了 [${this.getActionName(actB)}]\n`;

        // 慈露与圣盾共享完全防御逻辑（除狂雷外），并提供补血
        let isHolyShieldA = (actA === Action.HOLY_SHIELD || actA === Action.STEAL || actA === Action.MERCY_DEW);
        let isHolyShieldB = (actB === Action.HOLY_SHIELD || actB === Action.STEAL || actB === Action.MERCY_DEW);
        let specialLog = "";

        // 慈露特殊效果结算 (回血判定并扣除气)
        if (actA === Action.MERCY_DEW) {
            pA.hasHealed = true; pA.energy -= 1;
            if (pA.hp < pA.maxHp) { pA.hp++; specialLog += `💖 ${pA.name} 消耗1气施展【慈露】，恢复了1点生命并展开圣盾！\n`; } 
            else { specialLog += `💖 ${pA.name} 消耗1气施展【慈露】展开圣盾（生命已满，未回复）！\n`; }
        }
        if (actB === Action.MERCY_DEW) {
            pB.hasHealed = true; pB.energy -= 1;
            if (pB.hp < pB.maxHp) { pB.hp++; specialLog += `💖 CPU 消耗1气施展【慈露】，恢复了1点生命并展开圣盾！\n`; } 
            else { specialLog += `💖 CPU 消耗1气施展【慈露】展开圣盾（生命已满，未回复）！\n`; }
        }

        let energyGainA = (actA === Action.CHARGE) ? 1 : 0;
        let energyGainB = (actB === Action.CHARGE) ? 1 : 0;

        if (actA === Action.STEAL) pA.hasStolen = true;
        if (actB === Action.STEAL) pB.hasStolen = true;

        if (actA === Action.STEAL && actB === Action.CHARGE) {
            energyGainB = 0; energyGainA = 1; specialLog += `🥷 ${pA.name} 施展【神偷】，窃取了 CPU 集聚的真气！\n`;
        } else if (actA === Action.STEAL) { specialLog += `🥷 ${pA.name} 施展【神偷】，但 CPU 未在集气，窃取失败（触发圣盾庇护）！\n`; }

        if (actB === Action.STEAL && actA === Action.CHARGE) {
            energyGainA = 0; energyGainB = 1; specialLog += `🥷 CPU 施展【神偷】，窃取了 ${pA.name} 集聚的真气！\n`;
        } else if (actB === Action.STEAL) { specialLog += `🥷 CPU 施展【神偷】，但 ${pA.name} 未在集气，窃取失败（触发圣盾庇护）！\n`; }

        pA.energy += energyGainA; pB.energy += energyGainB;
        if (actA === Action.FIRE) pA.energy -= 2; if (actB === Action.FIRE) pB.energy -= 2;
        if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(actA)) pA.energy -= 1; if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(actB)) pB.energy -= 1;
        if (actA === Action.METAL_STORM) pA.energy -= 1; if (actB === Action.METAL_STORM) pB.energy -= 1;
        if (actA === Action.LIGHTNING) pA.energy -= 4; if (actB === Action.LIGHTNING) pB.energy -= 4;
        if (actA === Action.HOLY_SHIELD && this.payHolyShieldCost(pA)) specialLog += `✨ ${pA.name} 的【神圣庇护】生效，本局首次圣盾不消耗气！\n`;
        if (actB === Action.HOLY_SHIELD && this.payHolyShieldCost(pB)) specialLog += `✨ CPU 的【神圣庇护】生效，本局首次圣盾不消耗气！\n`;

        if (actA === Action.CHARGE && actB === Action.CHARGE) {
            log += "💤 双方都在安全距离蓄力集气，【无事发生】。\n";
            this.finishClassicDuelRound(log); return; 
        }

        const stormPowerA = actA === Action.METAL_STORM ? pA.metalPoints : 0;
        const stormPowerB = actB === Action.METAL_STORM ? pB.metalPoints : 0;
        let effDmgA = 0, effDmgB = 0;
        let paralyzeA = false, paralyzeB = false;
        let isIceElecCrossover = false;

        if (!isIceElecCrossover) {
            if (isHolyShieldB) {
                if (actA === Action.LIGHTNING) { effDmgA = 1; specialLog += `⚡🛡️ ${pA.name}的【狂雷】天威击穿了CPU的圣盾/慈露，造成 1 点余波伤害！\n`; } 
                else if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.METAL_STORM].includes(actA)) { specialLog += `🛡️✨ CPU 的圣光庇护将 ${pA.name} 的[${this.getActionName(actA)}]完全化解！\n`; }
            } else {
                if (actA === Action.ICE_SWORD) {
                    if ([Action.FIRE, Action.LIGHTNING, Action.METAL_STORM].includes(actB)) { effDmgA = 1; specialLog += `⚔️ ${pA.name}的冰刀破解打断了CPU的[${this.getActionName(actB)}]！\n`; }
                    else if (actB === Action.CHARGE) effDmgA = 1;
                } else if (actA === Action.ELEC_SWORD) {
                    if (actB === Action.SWORD) { specialLog += `⚡ ${pA.name}的电刀压制了CPU的普通刀，并引发麻痹！\n`; }
                    else if (actB === Action.CHARGE) effDmgA = 1;
                    if (this.shouldElecParalyze(actB)) paralyzeB = true;
                } else if (actA === Action.SWORD) {
                    if (![Action.SHIELD, Action.BARRIER, Action.FIRE, Action.ICE_SWORD, Action.ELEC_SWORD, Action.SWORD].includes(actB)) effDmgA = 1;
                } else if (actA === Action.FIRE) {
                    if (actB === Action.BARRIER) specialLog += `🛡️ ${pA.name}的火冲被CPU的[屏障]抵挡！\n`;
                    else if (actB !== Action.ICE_SWORD) effDmgA = 2;
                } else if (actA === Action.LIGHTNING) {
                    if (actB === Action.CHARGE) specialLog += `⚡ ${pA.name}引动狂雷，但CPU集气引导导电，狂雷落空！\n`;
                    else if (actB !== Action.ICE_SWORD) effDmgA = 3;
                } else if (actA === Action.METAL_STORM) {
                    if ([Action.BARRIER, Action.SHIELD].includes(actB)) specialLog += `🛡️ CPU 的【${this.getActionName(actB)}】完全抵挡了 ${pA.name} 的【金属风暴】！\n`;
                    else if (actB === Action.ICE_SWORD) specialLog += `❄️ CPU 的冰刀破解了 ${pA.name} 的【金属风暴】！\n`;
                    else effDmgA = stormPowerA;
                }
            }

            if (isHolyShieldA) {
                if (actB === Action.LIGHTNING) { effDmgB = 1; specialLog += `⚡🛡️ CPU的【狂雷】天威击穿了${pA.name}的圣盾/慈露，造成 1 点余波伤害！\n`; } 
                else if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.METAL_STORM].includes(actB)) { specialLog += `🛡️✨ ${pA.name} 的圣光庇护将 CPU 的[${this.getActionName(actB)}]完全化解！\n`; }
            } else {
                if (actB === Action.ICE_SWORD) {
                    if ([Action.FIRE, Action.LIGHTNING, Action.METAL_STORM].includes(actA)) { effDmgB = 1; specialLog += `⚔️ CPU的冰刀破解打断了${pA.name}的[${this.getActionName(actA)}]！\n`; }
                    else if (actA === Action.CHARGE) effDmgB = 1;
                } else if (actB === Action.ELEC_SWORD) {
                    if (actA === Action.SWORD) { specialLog += `⚡ CPU的电刀压制了${pA.name}的普通刀，并引发麻痹！\n`; }
                    else if (actA === Action.CHARGE) effDmgB = 1;
                    if (this.shouldElecParalyze(actA)) paralyzeA = true;
                } else if (actB === Action.SWORD) {
                    if (![Action.SHIELD, Action.BARRIER, Action.FIRE, Action.ICE_SWORD, Action.ELEC_SWORD, Action.SWORD].includes(actA)) effDmgB = 1;
                } else if (actB === Action.FIRE) {
                    if (actA === Action.BARRIER) specialLog += `🛡️ CPU的火冲被${pA.name}的[屏障]抵挡！\n`;
                    else if (actA !== Action.ICE_SWORD) effDmgB = 2;
                } else if (actB === Action.LIGHTNING) {
                    if (actA === Action.CHARGE) specialLog += `⚡ CPU引动狂雷，但${pA.name}集气引导导电，狂雷落空！\n`;
                    else if (actA !== Action.ICE_SWORD) effDmgB = 3;
                } else if (actB === Action.METAL_STORM) {
                    if ([Action.BARRIER, Action.SHIELD].includes(actA)) specialLog += `🛡️ ${pA.name} 的【${this.getActionName(actA)}】完全抵挡了 CPU 的【金属风暴】！\n`;
                    else if (actA === Action.ICE_SWORD) specialLog += `❄️ ${pA.name} 的冰刀破解了 CPU 的【金属风暴】！\n`;
                    else effDmgB = stormPowerB;
                }
            }
        }

        if (actA === Action.METAL_STORM) {
            pA.hasUsedMetalStorm = true;
            pA.metalPoints = 0;
            specialLog += `⚙️ ${pA.name} 释放【金属风暴】，消耗了 ${stormPowerA} 层金属点数。\n`;
        }
        if (actB === Action.METAL_STORM) {
            pB.hasUsedMetalStorm = true;
            pB.metalPoints = 0;
            specialLog += `⚙️ CPU 释放【金属风暴】，消耗了 ${stormPowerB} 层金属点数。\n`;
        }

        let equipLog = "";
        const isSwordA = [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(actA);
        const isSwordB = [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(actB);

        // 刀盾交锋 与 金属武者【刀碎生盾】被动
        if (actA === Action.SWORD && actB === Action.SHIELD) { 
            pA.swordCount--; 
            equipLog += `🛡️ CPU的盾牌震碎了${pA.name}的1把普通刀！\n`; 
            if (pA.swordCount <= 0) { pA.swordState = 'BROKEN'; pA.specialSwordCharges = 0; }
            if (pA.role === 'METAL_WARRIOR') {
                pA.barrierCount++;
                equipLog += `⚙️ ${pA.name} 触发被动【刀碎生盾】，获得1层屏障！\n`;
                if (this.addMetalPoint(pA)) equipLog += `🔩 ${pA.name} 获得1层金属点数（${pA.metalPoints}/4）。\n`;
            }
        }
        if (actB === Action.SWORD && actA === Action.SHIELD) { 
            pB.swordCount--; 
            equipLog += `🛡️ ${pA.name}的盾牌震碎了CPU的1把普通刀！\n`; 
            if (pB.swordCount <= 0) { pB.swordState = 'BROKEN'; pB.specialSwordCharges = 0; }
            if (pB.role === 'METAL_WARRIOR') {
                pB.barrierCount++;
                equipLog += `⚙️ CPU 触发被动【刀碎生盾】，获得1层屏障！\n`;
                if (this.addMetalPoint(pB)) equipLog += `🔩 CPU 获得1层金属点数（${pB.metalPoints}/4）。\n`;
            }
        }
        // 加入 !pB.hasBrokenSword 判定
        if (actA === Action.SWORD && actB === Action.HOLY_SHIELD && pB.role === 'PALADIN' && !pB.hasBrokenSword) {
            pB.hasBrokenSword = true; // 消耗特权
            pA.swordCount--;
            equipLog += `🛡️✨ CPU的圣骑士圣盾震碎了${pA.name}的1把普通刀（碎刀特权已消耗）！\n`;
            if (pA.swordCount <= 0) { pA.swordState = 'BROKEN'; pA.specialSwordCharges = 0; }
            if (pA.role === 'METAL_WARRIOR') {
                pA.barrierCount++;
                equipLog += `⚙️ ${pA.name} 触发被动【刀碎生盾】，获得1层屏障！\n`;
                if (this.addMetalPoint(pA)) equipLog += `🔩 ${pA.name} 获得1层金属点数（${pA.metalPoints}/4）。\n`;
            }
        }
        // 加入 !pA.hasBrokenSword 判定
        if (actB === Action.SWORD && actA === Action.HOLY_SHIELD && pA.role === 'PALADIN' && !pA.hasBrokenSword) {
            pA.hasBrokenSword = true; // 消耗特权
            pB.swordCount--;
            equipLog += `🛡️✨ ${pA.name}的圣骑士圣盾震碎了CPU的1把普通刀（碎刀特权已消耗）！\n`;
            if (pB.swordCount <= 0) { pB.swordState = 'BROKEN'; pB.specialSwordCharges = 0; }
            if (pB.role === 'METAL_WARRIOR') {
                pB.barrierCount++;
                equipLog += `⚙️ CPU 触发被动【刀碎生盾】，获得1层屏障！\n`;
                if (this.addMetalPoint(pB)) equipLog += `🔩 CPU 获得1层金属点数（${pB.metalPoints}/4）。\n`;
            }
        }

        // 刀斩屏障 与 金属武者【盾碎生刀】被动
        if (isSwordA && actB === Action.BARRIER) { 
            pB.barrierCount--; 
            this.playBarrierBrokenEffect(pB);
            equipLog += `💥 ${pA.name}击碎了CPU的1层[屏障]！\n`; 
            if (actA === Action.ELEC_SWORD) {
                equipLog += `⚡ 电刀击碎了屏障，但屏障吸收了麻痹电流。\n`;
            }
            if (pB.role === 'METAL_WARRIOR') {
                pB.swordCount++;
                if (pB.swordState === 'BROKEN') pB.swordState = 'NORMAL';
                equipLog += `⚙️ CPU 触发被动【盾碎生刀】，获得1把刀！\n`;
                if (this.addMetalPoint(pB)) equipLog += `🔩 CPU 获得1层金属点数（${pB.metalPoints}/4）。\n`;
            }
        }
        if (isSwordB && actA === Action.BARRIER) { 
            pA.barrierCount--; 
            this.playBarrierBrokenEffect(pA);
            equipLog += `💥 CPU击碎了${pA.name}的1层[屏障]！\n`; 
            if (actB === Action.ELEC_SWORD) {
                equipLog += `⚡ 电刀击碎了屏障，但屏障吸收了麻痹电流。\n`;
            }
            if (pA.role === 'METAL_WARRIOR') {
                pA.swordCount++;
                if (pA.swordState === 'BROKEN') pA.swordState = 'NORMAL';
                equipLog += `⚙️ ${pA.name} 触发被动【盾碎生刀】，获得1把刀！\n`;
                if (this.addMetalPoint(pA)) equipLog += `🔩 ${pA.name} 获得1层金属点数（${pA.metalPoints}/4）。\n`;
            }
        }

        log += specialLog;

        let finalDmgToB = 0, finalDmgToA = 0;
        if (effDmgA > effDmgB) {
            finalDmgToB = effDmgA;
            if (actA === Action.LIGHTNING && !isHolyShieldB) log += `💥 ${pA.name}的【狂雷】粉碎抵抗，造成 ${finalDmgToB} 点真实伤害！\n`;
            else if (actA === Action.FIRE && actB === Action.SWORD) log += `💥 ${pA.name}的火冲压制了普通刀，造成 ${finalDmgToB} 伤害！\n`;
            else if (actB === Action.CHARGE) log += `💥 ${pA.name}趁机发难，造成 ${finalDmgToB} 伤害！\n`;
            else if (!isHolyShieldB) log += `💥 ${pA.name}攻击命中，造成 ${finalDmgToB} 伤害！\n`;
        } else if (effDmgB > effDmgA) {
            finalDmgToA = effDmgB;
            if (actB === Action.LIGHTNING && !isHolyShieldA) log += `💥 CPU的【狂雷】粉碎抵抗，造成 ${finalDmgToA} 点真实伤害！\n`;
            else if (actB === Action.FIRE && actA === Action.SWORD) log += `💥 CPU的火冲压制了普通刀，造成 ${finalDmgToA} 伤害！\n`;
            else if (actA === Action.CHARGE) log += `💥 CPU趁机发难，造成 ${finalDmgToA} 伤害！\n`;
            else if (!isHolyShieldA) log += `💥 CPU攻击命中，造成 ${finalDmgToA} 伤害！\n`;
        } else if (effDmgA > 0 && effDmgA === effDmgB) {
            log += `🤝 双方势均力敌（各 ${effDmgA} 伤），能量交锋【相互抵消】，均未受伤！\n`;
        }

        if (finalDmgToA > 0) pA.hp -= finalDmgToA;
        if (finalDmgToB > 0) pB.hp -= finalDmgToB;

        log += equipLog;

        if (paralyzeA) { pA.nextTurnParalyze = true; log += `⚡ ${pA.name} 陷入麻痹状态！\n`; }
        if (paralyzeB) { pB.nextTurnParalyze = true; log += `⚡ CPU 陷入麻痹状态！\n`; }

        if (finalDmgToA === 0 && finalDmgToB === 0 && effDmgA === 0 && effDmgB === 0 && !log.includes("抵消") && !log.includes("震碎") && !log.includes("击碎") && !log.includes("麻痹") && !log.includes("失败") && !log.includes("窃取") && !log.includes("化解") && !log.includes("余波") && !log.includes("恢复")) {
            log += `🤝 双方招式错开或未能造成有效打击。\n`;
        }

        if (actA === Action.SWORD && pA.swordState === 'NORMAL') { pA.swordState = 'UNLOCKED'; pA.specialSwordCharges = pA.role === 'WARRIOR' ? 2 : 1; }
        else if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(actA) && pA.swordCount > 0) {
            pA.specialSwordCharges = Math.max(0, (pA.specialSwordCharges || 1) - 1);
            if (pA.specialSwordCharges <= 0) { pA.swordState = 'NORMAL'; log += `🔄 ${pA.name} 特武能量耗尽，变回普通刀。\n`; }
        }

        if (actB === Action.SWORD && pB.swordState === 'NORMAL') { pB.swordState = 'UNLOCKED'; pB.specialSwordCharges = pB.role === 'WARRIOR' ? 2 : 1; }
        else if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(actB) && pB.swordCount > 0) {
            pB.specialSwordCharges = Math.max(0, (pB.specialSwordCharges || 1) - 1);
            if (pB.specialSwordCharges <= 0) { pB.swordState = 'NORMAL'; log += `🔄 CPU 特武能量耗尽，变回普通刀。\n`; }
        }

        this.finishClassicDuelRound(log);
    }

    finishClassicDuelRound(log) {
        this.updateAiStallState([this.playerA, this.playerB]);
        this.playerA.aiRound = (this.playerA.aiRound || 0) + 1;
        this.playerB.aiRound = (this.playerB.aiRound || 0) + 1;
        this.playerA.isParalyzed = false; this.playerB.isParalyzed = false;
        if (this.playerA.nextTurnParalyze) { this.playerA.isParalyzed = true; this.playerA.nextTurnParalyze = false; }
        if (this.playerB.nextTurnParalyze) { this.playerB.isParalyzed = true; this.playerB.nextTurnParalyze = false; }
        
        this.rememberResolvedActions([this.playerA, this.playerB]);
        this.playerA.currentAction = null; this.playerB.currentAction = null;
        this.battleResult = null;

        const isDraw = this.playerA.hp <= 0 && this.playerB.hp <= 0;
        const winner = this.playerA.hp <= 0 ? this.playerB : (this.playerB.hp <= 0 ? this.playerA : null);
        if (this.isBo3Mode() && (isDraw || winner)) {
            this.battleResult = isDraw
                ? { playerA: 'defeat', playerB: 'defeat' }
                : winner === this.playerA
                    ? { playerA: 'victory', playerB: 'defeat' }
                    : { playerA: 'defeat', playerB: 'victory' };

            if (isDraw) {
                log += `\n本局平局，Round ${this.matchRound} 将重新开始！`;
                this.roundLog = log;
                this.updateUI();
                this.scheduleNextBo3Round();
                return;
            }

            this.matchScore[winner.id] = (this.matchScore[winner.id] || 0) + 1;
            log += `\n${winner.name} 赢得了 Round ${this.matchRound}！`;
            this.roundLog = log;
            this.updateUI();

            if (this.matchScore[winner.id] >= 2) {
                this.roundLog += `\n恭喜${winner.name}获胜！`;
                this.updateUI();
                this.showEndActions();
                this.showRoundFight(`恭喜${winner.name}获胜！`);
                return;
            }

            this.scheduleNextBo3Round();
            return;
        }

        if (this.playerA.hp <= 0 && this.playerB.hp <= 0) {
            this.battleResult = { playerA: 'defeat', playerB: 'defeat' };
            log += "\n💀 【平局】双方同归于尽！"; 
            this.showEndActions();
        } else if (this.playerA.hp <= 0) {
            this.battleResult = { playerA: 'defeat', playerB: 'victory' };
            log += `\n🏆 【游戏结束】机甲Z CPU 击败了 ${this.playerA.name}！`; 
            this.showEndActions();
        } else if (this.playerB.hp <= 0) {
            this.battleResult = { playerA: 'victory', playerB: 'defeat' };
            log += `\n🏆 【游戏结束】恭喜 ${this.playerA.name} 赢得了最终胜利！`; 
            this.showEndActions();
        }

        this.roundLog = log;
        this.updateUI();
    }
}

// ================= 新流程 / 2v2 扩展 =================
// The original 1v1 resolver is explicitly named above; later methods only dispatch to it.

Game.prototype.getPlayers = function() {
    return [this.playerA, this.playerB, this.playerC, this.playerD];
};

Game.prototype.rememberResolvedActions = function(players) {
    players.filter(Boolean).forEach(player => {
        if (!player.currentAction) return;
        const history = player.publicActionHistory || [];
        history.push(player.currentAction);
        player.publicActionHistory = history.slice(-4);
    });
};

Game.prototype.humanTeam = function() {
    return this.gameMode === '2v2' ? [this.playerA, this.playerC] : [this.playerA];
};

Game.prototype.cpuTeam = function() {
    if (this.gameMode === '2v2') return [this.playerB, this.playerD];
    if (this.gameMode === 'ffa') return [this.playerB, this.playerC, this.playerD];
    return [this.playerB];
};

Game.prototype.controlledHumanTeam = function() {
    return [this.playerA];
};

Game.prototype.aiControlledPlayers = function() {
    if (this.gameMode === '2v2') return [this.playerC, this.playerB, this.playerD];
    if (this.gameMode === 'ffa') return [this.playerB, this.playerC, this.playerD];
    return [this.playerB];
};

Game.prototype.isMultiplayerMode = function() {
    return this.gameMode === '2v2' || this.gameMode === 'ffa';
};

Game.prototype.isSuddenDeathMode = function() {
    return this.gameMode === 'sudden';
};

Game.prototype.isBo3Mode = function() {
    return this.gameMode === '1v1' || this.gameMode === 'sudden';
};

Game.prototype.clearBo3Timers = function() {
    if (this.roundAdvanceTimer) clearTimeout(this.roundAdvanceTimer);
    if (this.roundBannerTimer) clearTimeout(this.roundBannerTimer);
    this.roundAdvanceTimer = null;
    this.roundBannerTimer = null;
};

Game.prototype.scheduleBattleTask = function(callback, delay) {
    const timers = this.battleTimers || (this.battleTimers = new Set());
    const timer = setTimeout(() => {
        timers.delete(timer);
        callback();
    }, delay);
    timers.add(timer);
    return timer;
};

Game.prototype.clearBattleTimers = function() {
    this.battleTimers?.forEach(timer => clearTimeout(timer));
    this.battleTimers?.clear();
};

Game.prototype.resetBo3Match = function() {
    this.clearBo3Timers();
    this.matchScore = { A: 0, B: 0 };
    this.matchRound = 1;
    this.transitioningRound = false;
};

Game.prototype.updateMatchScoreUI = function() {
    if (!this.isBo3Mode()) return;
    ['a', 'b'].forEach(id => {
        const name = document.getElementById(`name-display-${id}`);
        if (!name) return;
        let score = document.getElementById(`match-score-${id}`);
        if (!score) {
            const row = document.createElement('div');
            row.className = 'name-row';
            score = document.createElement('div');
            score.id = `match-score-${id}`;
            score.className = 'match-score';
            name.parentElement.insertBefore(row, name);
            row.append(name, score);
        }
        const wins = this.matchScore?.[id.toUpperCase()] || 0;
        score.setAttribute('aria-label', `胜局 ${wins}/2`);
        const scoreMarkup = [0, 1].map(index =>
            `<span class="match-score-dot${index < wins ? ' won' : ''}"></span>`
        ).join('');
        if (score.innerHTML !== scoreMarkup) score.innerHTML = scoreMarkup;
    });
};

Game.prototype.showRoundFight = function(label, duration = 1550) {
    const banner = document.getElementById('round-fight-banner');
    if (!banner) return;
    if (this.roundBannerTimer) clearTimeout(this.roundBannerTimer);
    banner.textContent = typeof label === 'number' ? `Round ${label} Fight！` : label;
    banner.classList.remove('hidden', 'show');
    void banner.offsetWidth;
    banner.classList.add('show');
    this.roundBannerTimer = setTimeout(() => {
        banner.classList.remove('show');
        banner.classList.add('hidden');
        this.roundBannerTimer = null;
    }, duration);
};

Game.prototype.scheduleNextBo3Round = function() {
    this.transitioningRound = true;
    this.roundAdvanceTimer = setTimeout(() => this.beginNextBo3Round(), 1550);
};

Game.prototype.beginNextBo3Round = function() {
    this.roundAdvanceTimer = null;
    this.matchRound += 1;
    [this.playerA, this.playerB].forEach(player => player.reset());
    if (this.isSuddenDeathMode()) this.applySuddenDeathStats();
    this.aiDuelStallRounds = 0;
    this._lastResolvedHpTotal = null;
    this._aiMirrorLeads = {};
    this.pendingHumanIndex = 0;
    this.battleResult = null;
    this.transitioningRound = false;
    this.roundLog = `Round ${this.matchRound} 开始！`;
    this.hideEndActions();
    this.updateUI();
    this.showRoundFight(this.matchRound);
};

Game.prototype.applySuddenDeathStats = function() {
    [this.playerA, this.playerB].forEach(player => {
        const barbarian = player.role === 'BARBARIAN';
        player.hp = barbarian ? 2 : 1;
        player.maxHp = player.hp;
        player.energy = barbarian ? 2 : 3;
    });
};

Game.prototype.getSuddenDeathIntroText = function() {
    return `突然死亡模式开始！${this.playerA.name} [${this.playerA.getRoleName()}] VS CPU [${this.playerB.getRoleName()}]。规则：基础为1点生命、3点气；野蛮人额外获得1点生命但少1点气；普通刀消耗1点气；冰刀和电刀专门对抗火冲与狂雷。`;
};

Game.prototype.canUseAction = function(player, action) {
    if (!player || player.hp <= 0) return false;
    if (!this.isSuddenDeathMode()) return player.canUse(action);
    if (player.isParalyzed) return action === Action.CHARGE;
    switch (action) {
        case Action.CHARGE: return true;
        case Action.SWORD: return player.swordCount > 0 && player.swordState !== 'UNLOCKED' && player.energy >= 1;
        case Action.ICE_SWORD:
        case Action.ELEC_SWORD: return player.swordState === 'UNLOCKED' && player.swordCount > 0 && player.energy >= 1;
        case Action.FIRE: return player.energy >= 2;
        case Action.LIGHTNING: return player.energy >= 4;
        case Action.BARRIER: return player.barrierCount > 0;
        case Action.SHIELD: return true;
        case Action.HOLY_SHIELD: return player.energy >= 1 || (player.role === 'PALADIN' && !player.hasUsedFreeHolyShield);
        case Action.STEAL: return player.role === 'ROGUE' && !player.hasStolen;
        case Action.MERCY_DEW: return player.role === 'PRIEST' && !player.hasHealed && player.energy >= 1;
        case Action.METAL_STORM: return player.role === 'METAL_WARRIOR' && !player.hasUsedMetalStorm && player.metalPoints > 0 && player.energy >= 1;
        default: return false;
    }
};

Game.prototype.hasFreePaladinHolyShield = function(player) {
    return player?.role === 'PALADIN' && !player.hasUsedFreeHolyShield;
};

Game.prototype.payHolyShieldCost = function(player) {
    if (this.hasFreePaladinHolyShield(player)) {
        player.hasUsedFreeHolyShield = true;
        return true;
    }
    player.energy = Math.max(0, player.energy - 1);
    return false;
};

Game.prototype.addMetalPoint = function(player) {
    if (player?.role !== 'METAL_WARRIOR') return false;
    const previous = player.metalPoints || 0;
    player.metalPoints = Math.min(4, previous + 1);
    return player.metalPoints > previous;
};

Game.prototype.alliesOf = function(player) {
    if (this.gameMode === '2v2') {
        return this.humanTeam().includes(player) ? this.humanTeam() : this.cpuTeam();
    }
    return [player];
};

Game.prototype.opponentsOf = function(player) {
    if (this.gameMode === '2v2') {
        return this.humanTeam().includes(player) ? this.cpuTeam() : this.humanTeam();
    }
    if (this.gameMode === 'ffa') {
        return this.getPlayers().filter(item => item !== player);
    }
    return player === this.playerA ? [this.playerB] : [this.playerA];
};

Game.prototype.alive = function(team) {
    return team.filter(player => player.hp > 0);
};

Game.prototype.setAiRandomSeed = function(seed) {
    const normalizedSeed = Number(seed) >>> 0;
    this._aiRandomState = normalizedSeed || 0x6d2b79f5;
};

Game.prototype.aiRandom = function() {
    let state = this._aiRandomState >>> 0;
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    this._aiRandomState = state >>> 0;
    return this._aiRandomState / 0x100000000;
};

Game.prototype.ensureAiProfile = function(cpu) {
    if (!cpu || (cpu.aiStyle && cpu.aiPressureVariant != null)) return;
    const styleRoll = this.aiRandom();
    cpu.aiStyle = styleRoll < 0.55 ? 'aggressive'
        : (styleRoll < 0.75 ? 'tactical'
            : (styleRoll < 0.9 ? 'pressure' : 'steady'));
    cpu.aiPressureVariant = this.aiRandom() < 0.5 ? 0 : 1;
};

Game.prototype.getMirrorPressureVariant = function(cpu, target) {
    if (!target?.isCpuControlled) {
        return this.aiRandom() < 0.22
            ? 1 - (cpu.aiPressureVariant || 0)
            : ((cpu.aiPressureVariant || 0) + Math.floor((cpu.aiRound || 0) / 3)) % 2;
    }

    this._aiMirrorLeads ||= {};
    const pairKey = [cpu.id, target.id].sort().join(':');
    if (!this._aiMirrorLeads[pairKey]) {
        this._aiMirrorLeads[pairKey] = this.aiRandom() < 0.5 ? cpu.id : target.id;
    }
    return this._aiMirrorLeads[pairKey] === cpu.id ? 1 : 0;
};

Game.prototype.updateAiStallState = function(players) {
    const totalHp = players.filter(Boolean).reduce((sum, player) => sum + Math.max(0, player.hp), 0);
    this.aiDuelStallRounds = this._lastResolvedHpTotal === totalHp
        ? (this.aiDuelStallRounds || 0) + 1
        : 0;
    this._lastResolvedHpTotal = totalHp;
};

Game.prototype.playerLabel = function(player) {
    if (player.id === 'A') return player.name;
    if (this.gameMode === 'ffa') {
        if (player.id === 'B') return 'CPU 1';
        if (player.id === 'C') return 'CPU 2';
        if (player.id === 'D') return 'CPU 3';
    }
    if (player.id === 'C') return this.gameMode === '2v2' ? 'CPU 队友' : `${player.name}`;
    if (player.id === 'D') return 'CPU 队友';
    return 'CPU';
};

Game.prototype.initBackgroundMusic = function() {
    this.backgroundMusic = document.getElementById('background-music');
    this.musicMode = 'menu';
    this.currentMusicTrack = '';
    try {
        this.musicEnabled = localStorage.getItem('qizong.musicEnabled') !== 'off';
    } catch (error) {
        this.musicEnabled = true;
    }
    if (!this.backgroundMusic) return;

    this.backgroundMusic.loop = false;
    this.backgroundMusic.volume = 0.42;
    this.backgroundMusic.addEventListener('ended', () => {
        if (this.musicEnabled) this.playBackgroundMusic(this.musicMode, true);
    });

    document.addEventListener('pointerdown', () => {
        if (this.musicEnabled) this.playBackgroundMusic(this.musicMode);
    }, { once: true, capture: true });

    document.addEventListener('visibilitychange', () => {
        document.documentElement.classList.toggle('app-backgrounded', document.hidden);
        if (document.hidden) {
            this.resumeMusicOnVisible = this.musicEnabled && !this.backgroundMusic.paused;
            this.backgroundMusic.pause();
        } else if (this.resumeMusicOnVisible) {
            this.resumeMusicOnVisible = false;
            this.playBackgroundMusic(this.musicMode);
        }
    });

    document.querySelectorAll('#main-music-toggle, #battle-music-toggle').forEach(button => {
        button.onclick = () => this.toggleBackgroundMusic();
    });
    this.updateMusicToggleButtons();
    this.playBackgroundMusic('menu');
};

Game.prototype.playBackgroundMusic = function(mode, chooseNewTrack = false) {
    const audio = this.backgroundMusic;
    if (!audio || !this.musicEnabled) return;
    const tracks = mode === 'battle'
        ? ['music/backgroud_music/battle_1.mp3', 'music/backgroud_music/battle_2.mp3', 'music/backgroud_music/battle_3.mp3']
        : ['music/backgroud_music/menu_1.mp3', 'music/backgroud_music/menu_2.mp3', 'music/backgroud_music/menu_3.mp3'];
    const modeChanged = this.musicMode !== mode;
    this.musicMode = mode;

    if (modeChanged || chooseNewTrack || !this.currentMusicTrack) {
        const choices = tracks.filter(track => track !== this.currentMusicTrack);
        this.currentMusicTrack = choices[Math.floor(Math.random() * choices.length)] || tracks[0];
        audio.src = this.currentMusicTrack;
    }

    const playback = audio.play();
    if (playback?.catch) playback.catch(() => {});
    this.updateMusicToggleButtons();
};

Game.prototype.toggleBackgroundMusic = function() {
    this.musicEnabled = !this.musicEnabled;
    try {
        localStorage.setItem('qizong.musicEnabled', this.musicEnabled ? 'on' : 'off');
    } catch (error) {
        // Keep the setting for this session when storage is unavailable.
    }
    if (this.musicEnabled) this.playBackgroundMusic(this.musicMode);
    else this.backgroundMusic?.pause();
    this.updateMusicToggleButtons();
};

Game.prototype.updateMusicToggleButtons = function() {
    const enabled = this.musicEnabled !== false;
    document.querySelectorAll('#main-music-toggle, #battle-music-toggle').forEach(button => {
        button.classList.toggle('is-muted', !enabled);
        button.setAttribute('aria-pressed', String(enabled));
        button.setAttribute('aria-label', enabled ? '关闭背景音乐' : '开启背景音乐');
        button.title = enabled ? '关闭背景音乐' : '开启背景音乐';
    });
};

Game.prototype.setOverlay = function(id) {
    ['story-screen', 'main-menu-screen', 'pve-mode-screen', 'career-screen', 'login-screen'].forEach(screenId => {
        const el = document.getElementById(screenId);
        if (!el) return;
        el.classList.toggle('hidden', screenId !== id);
        el.style.display = screenId === id ? 'flex' : 'none';
    });
    if (id === 'main-menu-screen') this.updateMainHomeScreen?.();
    else this.stopMainHeroAnimation?.();
    this.playBackgroundMusic?.('menu');
};

Game.prototype.showUpdateNotice = function() {
    const modal = document.getElementById('update-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
};

Game.prototype.showSuddenDeathNotice = function() {
    const modal = document.getElementById('sudden-mode-modal');
    const closeBtn = document.getElementById('sudden-mode-close-btn');
    if (!modal) return;
    const close = () => {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    };
    if (closeBtn) closeBtn.onclick = close;
    modal.onclick = event => {
        if (event.target === modal) close();
    };
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
};

Game.prototype.renderCareerScreen = function() {
    const grid = document.getElementById('career-card-grid');
    if (!grid) return;
    grid.innerHTML = Object.entries(roleProfiles).map(([role, profile]) => `
        <button class="career-card faction-${profile.factionKey}" type="button" data-role="${role}" aria-label="${profile.name}">
            <img src="${profile.image}" alt="${profile.name}" loading="lazy" decoding="async">
            <div>
                <h3>${profile.name}</h3>
                <small>${profile.faction}</small>
                <p>${profile.description}</p>
                <strong>${profile.skillName}：${profile.skill}</strong>
            </div>
        </button>
    `).join('');
};

Game.prototype.openCareerDetail = function(role) {
    const profile = roleProfiles[role];
    const modal = document.getElementById('career-detail-modal');
    if (!profile || !modal) return;

    const spriteFiles = {
        PRIEST: 'priest_com-idle.webp',
        WARRIOR: 'warrior_com-idle.webp',
        PALADIN: 'knight_com-idle.webp',
        ROGUE: 'burglar_com-idle.webp',
        BARBARIAN: 'barbarian_com-idle.webp',
        METAL_WARRIOR: 'metal_com-idle.webp'
    };
    const spriteOffsets = {
        PRIEST: { x: -8.3, y: -0.8 },
        WARRIOR: { x: -14.3, y: -0.3 },
        PALADIN: { x: -6, y: 2.3 },
        ROGUE: { x: -7.1, y: -1.1 },
        BARBARIAN: { x: -6.6, y: -0.3 },
        METAL_WARRIOR: { x: -10, y: -0.6 }
    };
    const sprite = document.getElementById('career-detail-sprite');
    const stage = document.getElementById('career-sprite-stage');
    this.playCareerSprite(`assets/images/com_image/${spriteFiles[role]}`, profile.name);
    const offset = spriteOffsets[role] || { x: 0, y: 0 };
    sprite.style.setProperty('--career-sprite-offset-x', `${offset.x}%`);
    sprite.style.setProperty('--career-sprite-offset-y', `${offset.y}%`);
    document.getElementById('career-detail-name').textContent = profile.name;
    document.getElementById('career-detail-faction').textContent = profile.faction;
    document.getElementById('career-detail-description').textContent = profile.description;
    document.getElementById('career-detail-skill-name').textContent = profile.skillName;
    document.getElementById('career-detail-skill').textContent = profile.skill;
    stage.className = `career-sprite-stage faction-${profile.factionKey}`;
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.getElementById('close-career-detail')?.focus();
};

Game.prototype.stopCareerSpriteAnimation = function() {
    if (this.careerSpriteTimer) {
        clearInterval(this.careerSpriteTimer);
        this.careerSpriteTimer = null;
    }
};

Game.prototype.playCareerSprite = function(source, roleName) {
    const sprite = document.getElementById('career-detail-sprite');
    if (!sprite) return;

    this.stopCareerSpriteAnimation();
    sprite.style.backgroundImage = `url("${source}")`;
    sprite.setAttribute('aria-label', `${roleName} animation`);

    const columns = 7;
    const frames = Array.from({ length: columns * columns }, (_, index) => index);
    let cursor = 0;
    const renderFrame = () => {
        const frame = frames[cursor];
        const col = frame % columns;
        const row = Math.floor(frame / columns);
        sprite.style.backgroundPosition = `${(col / (columns - 1)) * 100}% ${(row / (columns - 1)) * 100}%`;
    };

    renderFrame();
    this.careerSpriteTimer = setInterval(() => {
        if (document.hidden) return;
        cursor = (cursor + 1) % frames.length;
        renderFrame();
    }, 75);
};

Game.prototype.readSavedPlayerProfile = function() {
    try {
        return {
            name: localStorage.getItem('qizong.playerName') || '无名勇士',
            role: localStorage.getItem('qizong.lastRole') || 'WARRIOR',
            coins: Number(localStorage.getItem('qizong.coins') || 0),
            diamonds: Number(localStorage.getItem('qizong.diamonds') || 0)
        };
    } catch (error) {
        return { name: '无名勇士', role: 'WARRIOR', coins: 0, diamonds: 0 };
    }
};

Game.prototype.savePlayerProfile = function() {
    try {
        localStorage.setItem('qizong.playerName', this.playerA.name || '无名勇士');
        localStorage.setItem('qizong.lastRole', this.playerA.role || 'WARRIOR');
        if (localStorage.getItem('qizong.coins') === null) localStorage.setItem('qizong.coins', '0');
        if (localStorage.getItem('qizong.diamonds') === null) localStorage.setItem('qizong.diamonds', '0');
    } catch (error) {
        // Private browsing can disable storage; the current session still works.
    }
};

Game.prototype.stopMainHeroAnimation = function() {
    if (!this.mainHeroTimer) return;
    clearInterval(this.mainHeroTimer);
    this.mainHeroTimer = null;
};

Game.prototype.playMainHeroAnimation = function(role) {
    const sprite = document.getElementById('main-hero-sprite');
    if (!sprite) return;

    const spriteFiles = {
        PRIEST: 'priest_com-idle.webp',
        WARRIOR: 'warrior_com-idle.webp',
        PALADIN: 'knight_com-idle.webp',
        ROGUE: 'burglar_com-idle.webp',
        BARBARIAN: 'barbarian_com-idle.webp',
        METAL_WARRIOR: 'metal_com-idle.webp'
    };
    const offsets = {
        PRIEST: { x: -4, y: -2 },
        WARRIOR: { x: -7, y: -1 },
        PALADIN: { x: -3, y: 0 },
        ROGUE: { x: -3.5, y: -2 },
        BARBARIAN: { x: -3.5, y: -1 },
        METAL_WARRIOR: { x: -5, y: -2 }
    };
    const safeRole = spriteFiles[role] ? role : 'WARRIOR';
    const offset = offsets[safeRole];
    sprite.style.backgroundImage = `url("assets/images/com_image/${spriteFiles[safeRole]}")`;
    sprite.style.setProperty('--main-sprite-offset-x', `${offset.x}%`);
    sprite.style.setProperty('--main-sprite-offset-y', `${offset.y}%`);
    sprite.setAttribute('aria-label', `${roleProfiles[safeRole].name}动画`);

    this.stopMainHeroAnimation();
    const columns = 7;
    let frame = 0;
    const render = () => {
        const col = frame % columns;
        const row = Math.floor(frame / columns);
        sprite.style.backgroundPosition = `${(col / 6) * 100}% ${(row / 6) * 100}%`;
    };
    render();
    this.mainHeroTimer = setInterval(() => {
        if (document.hidden) return;
        frame = (frame + 1) % 49;
        render();
    }, 80);
};

Game.prototype.updateMainHomeScreen = function() {
    const saved = this.readSavedPlayerProfile();
    const role = roleProfiles[saved.role] ? saved.role : 'WARRIOR';
    const profile = roleProfiles[role];
    const name = saved.name || '无名勇士';
    const formatAmount = value => String(Math.max(0, Number(value) || 0)).padStart(3, '0');

    const avatar = document.getElementById('main-player-avatar');
    if (avatar) {
        avatar.src = profile.image;
        avatar.alt = `${name}的${profile.name}头像`;
    }
    const nameEl = document.getElementById('main-player-name');
    const roleEl = document.getElementById('main-hero-role-name');
    const coinEl = document.getElementById('main-coin-count');
    const diamondEl = document.getElementById('main-diamond-count');
    if (nameEl) nameEl.textContent = name;
    if (roleEl) roleEl.textContent = profile.name;
    if (coinEl) coinEl.textContent = formatAmount(saved.coins);
    if (diamondEl) diamondEl.textContent = formatAmount(saved.diamonds);
    this.playMainHeroAnimation(role);
};

Game.prototype.configureRoleSelectionMode = function() {
    const mode = document.getElementById('game-mode')?.value || '1v1';
    const expandedMode = mode === '2v2' || mode === 'ffa';
    const tabsBox = document.querySelector('.role-target-tabs');
    const duoTabs = [...document.querySelectorAll('.duo-only')];
    tabsBox?.classList.toggle('duo-mode', expandedMode);
    duoTabs.forEach(tab => tab.classList.toggle('hidden', !expandedMode));
    const player2Tab = document.querySelector('[data-target="player2"]');
    const cpu2Tab = document.querySelector('[data-target="cpu2"]');
    if (player2Tab) {
        player2Tab.childNodes[0].textContent = mode === 'ffa' ? 'CPU 2 ' : '队友角色 ';
    }
    if (cpu2Tab) {
        cpu2Tab.childNodes[0].textContent = mode === 'ffa' ? 'CPU 3 ' : 'CPU 队友 ';
    }
    const activeTab = document.querySelector('.role-target-tab.active');
    if (!expandedMode && activeTab?.classList.contains('duo-only')) {
        document.querySelector('[data-target="player"]')?.click();
    }
};

Game.prototype.initMenuFlow = function() {
    this.renderCareerScreen();
    const skipBtn = document.getElementById('skip-story-btn');
    const pveBtn = document.getElementById('pve-menu-btn');
    const onlineBtn = document.getElementById('online-menu-btn');
    const careerBtn = document.getElementById('career-menu-btn');
    const modeConfirmBtn = document.getElementById('mode-confirm-btn');
    const modeInput = document.getElementById('game-mode');
    const difficultySelect = document.getElementById('cpu-difficulty');
    const roleDifficultySelect = document.getElementById('role-cpu-difficulty');
    const mainLoreBtn = document.getElementById('main-lore-btn');
    const mainTutorialBtn = document.getElementById('main-tutorial-btn');
    const mainShopBtn = document.getElementById('main-shop-btn');
    const rechargeBtn = document.getElementById('main-recharge-btn');
    const developerSupportBtn = document.getElementById('main-developer-support-btn');
    const developerSupportModal = document.getElementById('developer-support-modal');
    const developerSupportClose = document.getElementById('developer-support-close');
    const unavailableModal = document.getElementById('main-unavailable-modal');
    const unavailableTitle = document.getElementById('main-unavailable-title');
    const unavailableMessage = document.getElementById('main-unavailable-message');
    const unavailableClose = document.getElementById('main-unavailable-close');
    const showUnavailable = (title, message) => {
        if (!unavailableModal) return;
        if (unavailableTitle) unavailableTitle.textContent = title;
        if (unavailableMessage) unavailableMessage.textContent = message;
        unavailableModal.classList.remove('hidden');
        unavailableModal.style.display = 'flex';
        unavailableModal.setAttribute('aria-hidden', 'false');
    };
    const closeUnavailable = () => {
        if (!unavailableModal) return;
        unavailableModal.classList.add('hidden');
        unavailableModal.style.display = 'none';
        unavailableModal.setAttribute('aria-hidden', 'true');
    };

    if (skipBtn) skipBtn.onclick = () => {
        this.setOverlay('main-menu-screen');
        this.showUpdateNotice();
    };
    if (pveBtn) pveBtn.onclick = () => this.setOverlay('pve-mode-screen');
    if (onlineBtn) onlineBtn.onclick = () => alert('暂未开放，敬请期待');
    if (careerBtn) careerBtn.onclick = () => {
        this.renderCareerScreen();
        this.setOverlay('career-screen');
    };
    if (mainLoreBtn) mainLoreBtn.onclick = () => this.setOverlay('story-screen');
    if (mainTutorialBtn) mainTutorialBtn.onclick = () => document.dispatchEvent(new Event('open-tutorial'));
    if (mainShopBtn) mainShopBtn.onclick = () => showUnavailable('购物商城', '购物商城暂未开放，敬请期待。');
    if (rechargeBtn) rechargeBtn.onclick = () => showUnavailable('钻石充值', '充值页面暂未开放，敬请期待。');
    if (developerSupportBtn) developerSupportBtn.onclick = () => {
        if (!developerSupportModal) return;
        developerSupportModal.classList.remove('hidden');
        developerSupportModal.style.display = 'flex';
        developerSupportModal.setAttribute('aria-hidden', 'false');
    };
    const closeDeveloperSupport = () => {
        if (!developerSupportModal) return;
        developerSupportModal.classList.add('hidden');
        developerSupportModal.style.display = 'none';
        developerSupportModal.setAttribute('aria-hidden', 'true');
    };
    if (developerSupportClose) developerSupportClose.onclick = closeDeveloperSupport;
    developerSupportModal?.addEventListener('click', event => {
        if (event.target === developerSupportModal) closeDeveloperSupport();
    });
    if (unavailableClose) unavailableClose.onclick = closeUnavailable;
    unavailableModal?.addEventListener('click', event => {
        if (event.target === unavailableModal) closeUnavailable();
    });

    const careerGrid = document.getElementById('career-card-grid');
    const careerModal = document.getElementById('career-detail-modal');
    const closeCareerDetail = () => {
        if (!careerModal) return;
        this.stopCareerSpriteAnimation();
        careerModal.classList.add('hidden');
        careerModal.style.display = 'none';
        careerModal.setAttribute('aria-hidden', 'true');
    };
    careerGrid?.addEventListener('click', event => {
        const card = event.target.closest('.career-card');
        if (card) this.openCareerDetail(card.dataset.role);
    });
    document.getElementById('close-career-detail')?.addEventListener('click', closeCareerDetail);
    careerModal?.addEventListener('click', event => {
        if (event.target === careerModal) closeCareerDetail();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !careerModal?.classList.contains('hidden')) closeCareerDetail();
    });

    document.querySelectorAll('.menu-back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.dataset.back === 'story') this.setOverlay('story-screen');
            else if (btn.dataset.back === 'pve') this.setOverlay('pve-mode-screen');
            else this.setOverlay('main-menu-screen');
        });
    });

    document.querySelectorAll('.mode-choice-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mode-choice-btn').forEach(item => item.classList.remove('active'));
            btn.classList.add('active');
            if (modeInput) modeInput.value = btn.dataset.mode || '1v1';
            this.configureRoleSelectionMode();
            if (btn.dataset.mode === 'sudden') this.showSuddenDeathNotice();
        });
    });

    if (modeConfirmBtn) modeConfirmBtn.onclick = () => {
        if (roleDifficultySelect && difficultySelect) roleDifficultySelect.value = difficultySelect.value;
        this.configureRoleSelectionMode();
        this.setOverlay('login-screen');
    };
};

Game.prototype.initGame = function() {
    this.initBackgroundMusic();
    const loginScreen = document.getElementById('login-screen');
    const startBtn = document.getElementById('start-game-btn');
    const usernameInput = document.getElementById('username-input');
    const roleASelect = document.getElementById('role-a');
    const roleBSelect = document.getElementById('role-b');
    const roleCSelect = document.getElementById('role-c');
    const roleDSelect = document.getElementById('role-d');
    const difficultySelect = document.getElementById('cpu-difficulty');
    const roleDifficultySelect = document.getElementById('role-cpu-difficulty');

    const savedProfile = this.readSavedPlayerProfile();
    if (roleProfiles[savedProfile.role]) {
        this.playerA.role = savedProfile.role;
        if (roleASelect) roleASelect.value = savedProfile.role;
    }
    this.playerA.name = savedProfile.name;
    if (usernameInput && savedProfile.name !== '无名勇士') usernameInput.value = savedProfile.name;

    this.initMenuFlow();
    this.initRoleSelection(roleASelect, roleBSelect, roleCSelect, roleDSelect);
    this.configureRoleSelectionMode();

    if (usernameInput) {
        usernameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') startBtn.click();
        });
    }

    startBtn.onclick = () => {
        const nameVal = usernameInput ? usernameInput.value.trim() : '';
        this.gameMode = document.getElementById('game-mode')?.value || '1v1';
        this.cpuDifficulty = roleDifficultySelect?.value || difficultySelect?.value || 'normal';
        this.playerA.name = nameVal || '无名勇士';
        this.playerB.name = this.gameMode === 'ffa' ? 'CPU 1' : 'CPU';
        this.playerC.name = this.gameMode === 'ffa' ? 'CPU 2' : 'CPU 队友';
        this.playerD.name = this.gameMode === 'ffa' ? 'CPU 3' : 'CPU 队友';
        this.playerA.role = roleASelect ? roleASelect.value : 'WARRIOR';
        this.playerB.role = roleBSelect ? roleBSelect.value : 'WARRIOR';
        this.playerC.role = roleCSelect ? roleCSelect.value : 'WARRIOR';
        this.playerD.role = roleDSelect ? roleDSelect.value : 'WARRIOR';
        this.getPlayers().forEach(player => player.reset());
        this.savePlayerProfile();
        this.aiDuelStallRounds = 0;
        this._lastResolvedHpTotal = null;
        this._aiMirrorLeads = {};
        if (this.isSuddenDeathMode()) this.applySuddenDeathStats();
        this.pendingHumanIndex = 0;
        loginScreen.classList.add('hidden');
        loginScreen.style.display = 'none';
        this.startGame();
    };
};

Game.prototype.initRoleSelection = function(roleAInput, roleBInput, roleCInput, roleDInput) {
    const grid = document.getElementById('role-card-grid');
    const modal = document.getElementById('role-detail-modal');
    if (!grid || !modal) return;

    const tabs = [...document.querySelectorAll('.role-target-tab')];
    const closeBtn = document.getElementById('close-role-detail');
    const confirmBtn = document.getElementById('confirm-role-btn');
    const targetMap = {
        player: { input: roleAInput, summary: document.getElementById('player-role-summary'), label: '我方角色' },
        cpu: { input: roleBInput, summary: document.getElementById('cpu-role-summary'), label: 'CPU 角色' },
        player2: { input: roleCInput, summary: document.getElementById('player2-role-summary'), label: '队友角色' },
        cpu2: { input: roleDInput, summary: document.getElementById('cpu2-role-summary'), label: 'CPU 队友' }
    };
    let activeTarget = 'player';
    let previewRole = 'WARRIOR';

    grid.innerHTML = Object.entries(roleProfiles).map(([role, profile]) => `
        <button class="role-card faction-${profile.factionKey}" type="button" data-role="${role}" aria-label="查看${profile.name}详情">
            <span class="role-card-check">✓</span>
            <span class="role-card-art">
                <img class="role-card-image" src="${profile.image}" alt="${profile.name}" loading="lazy" decoding="async">
                <span class="role-card-image-label">
                    <strong>${profile.name}</strong>
                    <small>${profile.faction}</small>
                </span>
            </span>
        </button>
    `).join('');

    const updateCards = () => {
        const selectedRole = targetMap[activeTarget]?.input?.value || 'WARRIOR';
        grid.querySelectorAll('.role-card').forEach(card => {
            const selected = card.dataset.role === selectedRole;
            card.classList.toggle('selected', selected);
            card.setAttribute('aria-pressed', String(selected));
        });
    };

    const closeModal = () => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
    };

    const openModal = role => {
        const profile = roleProfiles[role];
        previewRole = role;
        document.getElementById('role-detail-image').src = profile.image;
        document.getElementById('role-detail-image').alt = profile.name;
        document.getElementById('role-detail-name').textContent = profile.name;
        document.getElementById('role-detail-faction').textContent = profile.faction;
        document.getElementById('role-detail-description').textContent = profile.description;
        document.getElementById('role-detail-skill-name').textContent = profile.skillName;
        document.getElementById('role-detail-skill').textContent = profile.skill;
        document.querySelector('.role-detail-visual').className = `role-detail-visual faction-${profile.factionKey}`;
        confirmBtn.textContent = `选择为${targetMap[activeTarget]?.label || '角色'}`;
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        closeBtn.focus();
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('hidden')) return;
            activeTarget = tab.dataset.target;
            tabs.forEach(item => {
                const active = item === tab;
                item.classList.toggle('active', active);
                item.setAttribute('aria-selected', String(active));
            });
            updateCards();
        });
    });

    grid.addEventListener('click', event => {
        const card = event.target.closest('.role-card');
        if (card) openModal(card.dataset.role);
    });

    confirmBtn.addEventListener('click', () => {
        const profile = roleProfiles[previewRole];
        const target = targetMap[activeTarget];
        if (target?.input) target.input.value = previewRole;
        if (target?.summary) target.summary.textContent = profile.name;
        updateCards();
        closeModal();
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', event => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });

    this.configureRoleSelectionMode();
    updateCards();
};

Game.prototype.renderBattleLayout = function() {
    const statusBar = document.getElementById('status-bar');
    const stageArea = document.querySelector('.stage-area');
    const battleScene = document.getElementById('battle-scene');
    if (!statusBar || !stageArea) return;

    battleScene?.classList.toggle('multiplayer-battle', this.isMultiplayerMode());
    battleScene?.classList.toggle('ffa-battle', this.gameMode === 'ffa');

    if (!this.isMultiplayerMode()) {
        statusBar.classList.remove('ffa-status-bar');
        stageArea.className = 'stage-area';
        statusBar.innerHTML = `
            <div class="player-status p1">
                <div id="name-display-a" class="name-label">玩家 A</div>
                <div class="status-line" id="hp-a"></div>
                <div class="status-line" id="energy-a"></div>
                <div class="status-line buffs"><span id="barrier-a"></span><span id="sword-a"></span><span id="metal-points-a"></span><span id="paralysis-a"></span></div>
            </div>
            <div class="vs-badge">VS</div>
            <div class="player-status p2">
                <div id="name-display-b" class="name-label">CPU</div>
                <div class="status-line" id="hp-b" style="justify-content: flex-end;"></div>
                <div class="status-line" id="energy-b" style="justify-content: flex-end;"></div>
                <div class="status-line buffs" style="justify-content: flex-end;"><span id="barrier-b"></span><span id="sword-b"></span><span id="metal-points-b"></span><span id="paralysis-b"></span></div>
            </div>`;
        stageArea.innerHTML = `
            <div class="character-box" data-player-id="A"><div id="lock-status-a" class="speech-bubble hidden"></div><div class="avatar p1-avatar">🙂</div></div>
            <div class="character-box" data-player-id="B"><div id="lock-status-b" class="speech-bubble">思考中...</div><div class="avatar p2-avatar">🤖</div></div>`;
        return;
    }

    if (this.gameMode === 'ffa') {
        statusBar.classList.add('ffa-status-bar');
        statusBar.innerHTML = `
            <div class="status-team player">${this.renderStatusBlock(this.playerA)}</div>
            <div class="status-team cpu">${this.renderStatusBlock(this.playerC, true)}</div>
            <div class="vs-badge">乱斗</div>
            <div class="status-team player">${this.renderStatusBlock(this.playerB)}</div>
            <div class="status-team cpu">${this.renderStatusBlock(this.playerD, true)}</div>`;
    } else {
        statusBar.classList.remove('ffa-status-bar');
        statusBar.innerHTML = `
            <div class="status-team player">${this.renderStatusBlock(this.playerA)}${this.renderStatusBlock(this.playerC)}</div>
            <div class="vs-badge">VS</div>
            <div class="status-team cpu">${this.renderStatusBlock(this.playerB, true)}${this.renderStatusBlock(this.playerD, true)}</div>`;
    }
    stageArea.className = 'stage-area team-stage';
    const leftChars = this.gameMode === 'ffa'
    ? `${this.renderCharacterBlock(this.playerA, 'p1-avatar')}${this.renderCharacterBlock(this.playerB, 'p1-avatar')}`
    : `${this.renderCharacterBlock(this.playerA, 'p1-avatar')}${this.renderCharacterBlock(this.playerC, 'p1-avatar')}`;
    // The CPU formation is column-reversed, so render its source order in reverse
    // to keep each status block aligned with the character occupying that slot.
    const rightChars = this.gameMode === 'ffa'
        ? `${this.renderCharacterBlock(this.playerD, 'p2-avatar')}${this.renderCharacterBlock(this.playerC, 'p2-avatar')}`
        : `${this.renderCharacterBlock(this.playerD, 'p2-avatar')}${this.renderCharacterBlock(this.playerB, 'p2-avatar')}`;
    stageArea.innerHTML = `
        <div class="team-formation player-side">${leftChars}</div>
        <div class="team-formation cpu-side">${rightChars}</div>`;
};

Game.prototype.applyRandomBattleBackground = function() {
    const scene = document.getElementById('battle-scene');
    if (!scene) return;

    const maps = [
        'assets/images/map/ancient-colosseum-arena-background.webp',
        'assets/images/map/ancient-colosseum-marble-sci-fi-background.webp',
        'assets/images/map/chinese-arena-battle-background-lineart.webp',
        'assets/images/map/northern-snow-fortress-arena-background.webp',
        'assets/images/map/western-regions-oasis-arena-background.webp'
    ];
    const choices = maps.filter(map => map !== this.currentBattleBackground);
    const selected = (choices.length ? choices : maps)[Math.floor(Math.random() * (choices.length || maps.length))];

    this.currentBattleBackground = selected;
    scene.style.setProperty('--battle-background-image', `url("${selected}")`);
};

Game.prototype.renderStatusBlock = function(player, right = false) {
    const id = player.id.toLowerCase();
    const justify = right ? ' style="justify-content: flex-end;"' : '';
    return `<div class="player-status ${right ? 'p2' : 'p1'}" data-player-id="${player.id}">
        <div id="name-display-${id}" class="name-label"></div>
        <div class="status-line" id="hp-${id}"${justify}></div>
        <div class="status-line" id="energy-${id}"${justify}></div>
        <div class="status-line buffs"${justify}><span id="barrier-${id}"></span><span id="sword-${id}"></span><span id="metal-points-${id}"></span><span id="paralysis-${id}"></span></div>
    </div>`;
};

Game.prototype.renderCharacterBlock = function(player, avatarClass) {
    const id = player.id.toLowerCase();
    return `<div class="character-box" data-player-id="${player.id}"><div id="lock-status-${id}" class="speech-bubble hidden"></div><div class="avatar ${avatarClass} avatar-${id}">🙂</div></div>`;
};

Game.prototype.effectAssetFor = function(action) {
    const map = {
        [Action.SWORD]: 'assets/images/blade_1.webp',
        [Action.ICE_SWORD]: 'assets/images/iceblade_1.webp',
        [Action.ELEC_SWORD]: 'assets/images/electricblade_1.webp',
        [Action.FIRE]: 'assets/images/fireball_1.webp',
        [Action.LIGHTNING]: 'assets/images/lightning_1.webp'
    };
    return map[action] || '';
};

Game.prototype.ensureEffectLayer = function() {
    const battleScene = document.getElementById('battle-scene');
    if (!battleScene) return null;
    let layer = battleScene.querySelector('.battle-effect-layer');
    if (!layer) {
        layer = document.createElement('div');
        layer.className = 'battle-effect-layer';
        battleScene.appendChild(layer);
    }
    return layer;
};

Game.prototype.effectPointFor = function(player) {
    const scene = document.getElementById('battle-scene');
    let box = document.querySelector(`.character-box[data-player-id="${player.id}"]`);
    if (!box) {
        const avatar = document.querySelector(`.avatar-${player.id.toLowerCase()}`)
            || (player.id === 'A' ? document.querySelector('.p1-avatar') : document.querySelector('.p2-avatar'));
        box = avatar?.closest('.character-box') || avatar;
    }
    if (!scene || !box) return { x: 0, y: 0 };
    const sceneRect = scene.getBoundingClientRect();
    const boxRect = box.getBoundingClientRect();
    return {
        x: boxRect.left + boxRect.width / 2 - sceneRect.left,
        y: boxRect.top + boxRect.height * 0.48 - sceneRect.top
    };
};

Game.prototype.middlePointBetween = function(a, b) {
    const pa = this.effectPointFor(a);
    const pb = this.effectPointFor(b);
    return { x: (pa.x + pb.x) / 2, y: (pa.y + pb.y) / 2 };
};

Game.prototype.isSwordEffectAction = function(action) {
    return [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(action);
};

Game.prototype.shouldShowEffectAgainst = function(action, defense) {
    if (!this.effectAssetFor(action)) return false;
    if (this.isSwordEffectAction(action) && this.isSwordEffectAction(defense)) return true;
    if (action === Action.FIRE && defense === Action.FIRE) return true;

    const spellPriority = { [Action.FIRE]: 1, [Action.LIGHTNING]: 2, [Action.ICE_SWORD]: 3 };
    if (spellPriority[action] && spellPriority[defense]) {
        return spellPriority[action] >= spellPriority[defense];
    }
    if (action === Action.SWORD && defense === Action.FIRE) return false;
    if (action === Action.FIRE && defense === Action.SWORD) return true;
    return true;
};

Game.prototype.addBattleEffect = function(kind, action, point, options = {}) {
    const layer = this.ensureEffectLayer();
    const asset = options.asset || this.effectAssetFor(action);
    if (!layer || !asset) return;
    
    const el = document.createElement('div');
    el.className = `battle-effect ${kind}`;
    el.style.backgroundImage = `url("${asset}")`;

// ======== 👇 尺寸与位置微调控制中心 👇 ========
    let effectSize = options.size || 100; 
    let offsetX = 0; // 水平偏移：正数向右，负数向左
    let offsetY = 0; // 垂直偏移：正数向下，负数向上

    // 针对每个技能进行独立的【大小】和【位置】定制
    if (action === Action.SWORD) {
        effectSize = 120;
        offsetX = 0;   
        offsetY = -15; // 稍微往上提一点点
    } // 👈 之前漏掉的大括号已补齐！

    if (action === Action.ICE_SWORD) {
        effectSize = 130;
        offsetX = 0;
        offsetY = -15;
    }
    
    if (action === Action.ELEC_SWORD) {
        effectSize = 140;
        offsetX = 0;
        offsetY = -15;
    }
    
    if (action === Action.FIRE) {
        effectSize = 160;
        offsetX = 0;
        offsetY = 0;   // 火球绝对居中，不需要偏移
    }
    
    if (action === Action.LIGHTNING) {
        effectSize = 200;
        offsetX = 0;
        offsetY = -60; // 狂雷重心在云端，直接大幅度向上微调（如果你觉得还不够高，改成 -80 或 -100 都行）
    }

    if (Number.isFinite(options.offsetX)) offsetX = options.offsetX;
    if (Number.isFinite(options.offsetY)) offsetY = options.offsetY;

    // Keep the largest effects within the available battle width on small phones.
    const sceneWidth = layer.getBoundingClientRect().width;
    if (sceneWidth > 0) {
        effectSize = Math.min(effectSize, Math.max(112, Math.floor(sceneWidth * 0.48)));
    }

    // 1. 设置绝对大小
    el.style.width = `${effectSize}px`;
    el.style.height = `${effectSize}px`;

    // 2. 纯净的位置微调（直接应用偏移量，坚决不减去一半尺寸！）
    if (offsetX !== 0) el.style.marginLeft = `${offsetX}px`;
    if (offsetY !== 0) el.style.marginTop = `${offsetY}px`;
    // ===================================
    if (kind === 'fly') {
        el.style.setProperty('--from-x', `${options.from.x}px`);
        el.style.setProperty('--from-y', `${options.from.y}px`);
        el.style.setProperty('--to-x', `${options.to.x}px`);
        el.style.setProperty('--to-y', `${options.to.y}px`);
        el.style.setProperty('--flip-x', options.from.x > options.to.x ? '-1' : '1');
        el.style.left = `${options.from.x}px`;
        el.style.top = `${options.from.y}px`;
    } else {
        el.style.left = `${point.x}px`;
        el.style.top = `${point.y}px`;
        if (options.from && options.to) {
            el.style.setProperty('--flip-x', options.from.x > options.to.x ? '-1' : '1');
        }
    }
    layer.appendChild(el);
    setTimeout(() => el.remove(), options.duration || 900);
};

Game.prototype.effectFrontOffsetFor = function(player) {
    const scene = document.getElementById('battle-scene');
    const point = this.effectPointFor(player);
    if (!scene) return player?.id === 'B' || player?.id === 'D' ? -42 : 42;
    return point.x < scene.getBoundingClientRect().width / 2 ? 42 : -42;
};

Game.prototype.playStatusEffect = function(actor, effect) {
    if (!actor || actor.hp <= 0) return;
    const effects = {
        barrier: {
            asset: 'assets/images/barrier_.webp',
            className: 'status-effect barrier-effect',
            size: 205,
            duration: 820
        },
        barrierBroken: {
            asset: 'assets/images/barrier_broken_.webp',
            className: 'status-effect barrier-broken-effect',
            size: 220,
            duration: 880
        },
        charge: {
            asset: 'assets/images/charge_.webp',
            className: 'status-effect charge-effect',
            size: 210,
            duration: 980
        },
        holyShield: {
            asset: 'assets/images/holyshield_.webp',
            className: 'status-effect holy-shield-effect',
            size: 215,
            duration: 860
        },
        shield: {
            asset: 'assets/images/sheild_.webp',
            className: 'status-effect shield-effect',
            size: 155,
            duration: 760
        }
    };
    const config = effects[effect];
    if (!config) return;
    const options = effect === 'shield'
        ? { ...config, offsetX: this.effectFrontOffsetFor(actor), offsetY: 4 }
        : config;
    this.addBattleEffect(config.className, null, this.effectPointFor(actor), options);
};

Game.prototype.playActionStatusEffect = function(actor) {
    const action = actor?.currentAction;
    if (action === Action.BARRIER) this.playStatusEffect(actor, 'barrier');
    else if (action === Action.SHIELD) this.playStatusEffect(actor, 'shield');
    else if (action === Action.CHARGE) this.playStatusEffect(actor, 'charge');
    else if (action === Action.HOLY_SHIELD) this.playStatusEffect(actor, 'holyShield');
};

Game.prototype.playBarrierBrokenEffect = function(target) {
    this.playStatusEffect(target, 'barrierBroken');
};

Game.prototype.playPairEffect = function(actor, target, action) {
    if (!actor || !target || actor.hp <= 0 || target.hp <= 0) return;
    const defense = target.currentAction;
    if (!this.shouldShowEffectAgainst(action, defense)) return;

    if (this.isSwordEffectAction(action) && this.isSwordEffectAction(defense)) {
        this.addBattleEffect('clash', action, this.middlePointBetween(actor, target));
        return;
    }
    if (action === Action.FIRE && defense === Action.FIRE) {
        const from = this.effectPointFor(actor);
        const to = this.middlePointBetween(actor, target);
        this.addBattleEffect('fly', action, null, { from, to });
        return;
    }
    if (action === Action.FIRE) {
        const from = this.effectPointFor(actor);
        const to = this.effectPointFor(target);
        this.addBattleEffect('fly', action, null, { from, to });
        return;
    }
    if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.LIGHTNING].includes(action)) {
        this.addBattleEffect('instant', action, this.effectPointFor(target), {
            from: this.effectPointFor(actor),
            to: this.effectPointFor(target)
        });
    }
};

Game.prototype.playRoundEffects = function(pairs) {
    const layer = this.ensureEffectLayer();
    if (layer) layer.innerHTML = '';
    this.getPlayers()
        .filter(player => player?.hp > 0 && player.currentAction)
        .forEach(player => this.playActionStatusEffect(player));
    pairs.forEach(pair => this.playPairEffect(pair.actor, pair.target, pair.action));
};

Game.prototype.currentAttackPairs = function() {
    if (!this.isMultiplayerMode()) {
        return [
            { actor: this.playerA, target: this.playerB, action: this.playerA.currentAction },
            { actor: this.playerB, target: this.playerA, action: this.playerB.currentAction }
        ];
    }
    const actors = (this.gameMode === 'ffa'
        ? this.getPlayers()
        : [...this.humanTeam(), ...this.cpuTeam()]
    ).filter(player => player.hp > 0);
    const pairs = [];
    actors.forEach(actor => {
        const action = actor.currentAction;
        if (![Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.LIGHTNING, Action.METAL_STORM].includes(action)) return;
        const targets = [Action.LIGHTNING, Action.FIRE].includes(action)
            ? this.alive(this.opponentsOf(actor))
            : [actor.currentTarget].filter(Boolean);
        targets.forEach(target => pairs.push({ actor, target, action }));
    });
    return pairs;
};

Game.prototype.showEndActions = function() {
    document.getElementById('restart-btn')?.classList.remove('hidden');
    document.getElementById('return-role-btn')?.classList.remove('hidden');
};

Game.prototype.hideEndActions = function() {
    document.getElementById('restart-btn')?.classList.add('hidden');
    document.getElementById('return-role-btn')?.classList.add('hidden');
};

Game.prototype.showBattleToast = function(message) {
    const container = document.getElementById('game-container');
    if (!container) return;
    container.querySelector('.battle-toast')?.remove();
    const toast = document.createElement('div');
    toast.className = 'battle-toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 1500);
};

Game.prototype.syncSwordControls = function(actor) {
    const subContainer = document.getElementById('sub-actions-a');
    const swordBtn = document.querySelector('#actions-a [data-action="SWORD"]');
    const awakened = !!actor
        && actor.hp > 0
        && actor.swordState === 'UNLOCKED'
        && actor.swordCount > 0
        && !actor.isParalyzed
        && !actor.currentAction
        && !this.battleResult;
    subContainer?.classList.toggle('hidden', !awakened);
    if (swordBtn) {
        swordBtn.classList.toggle('awakened-locked', awakened);
        swordBtn.setAttribute('aria-disabled', awakened ? 'true' : String(swordBtn.disabled));
    }
};

Game.prototype.resetCurrentMatch = function() {
    this.clearBattleTimers();
    if (this.isBo3Mode()) this.resetBo3Match();
    this.getPlayers().forEach(player => player.reset());
    this.aiDuelStallRounds = 0;
    this._lastResolvedHpTotal = null;
    this._aiMirrorLeads = {};
    if (this.isSuddenDeathMode()) this.applySuddenDeathStats();
    this.pendingHumanIndex = 0;
    this.battleResult = null;
    this.roundLog = '游戏重置！新的对决开始。';
    this.hideEndActions();
    this.applyRandomBattleBackground();
    if (this.isSuddenDeathMode()) {
        this.roundLog = this.getSuddenDeathIntroText();
    }
    this.updateUI();
    if (this.isBo3Mode()) this.showRoundFight(this.matchRound);
};

Game.prototype.returnToRoleSelect = function() {
    this.clearBo3Timers();
    this.clearBattleTimers();
    this.transitioningRound = false;
    this.getPlayers().forEach(player => player.reset());
    this.aiDuelStallRounds = 0;
    this._lastResolvedHpTotal = null;
    this._aiMirrorLeads = {};
    this.pendingHumanIndex = 0;
    this.battleResult = null;
    this.roundLog = '请选择角色后进入战场。';
    this.hideEndActions();
    this.configureRoleSelectionMode();
    this.setOverlay('login-screen');
};

Game.prototype.startGame = function() {
    this.clearBattleTimers();
    this.playBackgroundMusic?.('battle', true);
    this.renderBattleLayout();
    this.applyRandomBattleBackground();
    this.bindActionEvents();
    const restartBtn = document.getElementById('restart-btn');
    const returnRoleBtn = document.getElementById('return-role-btn');
    const battleReturnBtn = document.getElementById('battle-return-btn');
    const battleReturnModal = document.getElementById('battle-return-modal');
    const battleReturnCancelBtn = document.getElementById('battle-return-cancel-btn');
    const battleReturnConfirmBtn = document.getElementById('battle-return-confirm-btn');
    const closeBattleReturnModal = () => {
        if (!battleReturnModal) return;
        battleReturnModal.classList.add('hidden');
        battleReturnModal.setAttribute('aria-hidden', 'true');
    };
    const openBattleReturnModal = () => {
        if (!battleReturnModal) return;
        battleReturnModal.classList.remove('hidden');
        battleReturnModal.setAttribute('aria-hidden', 'false');
        battleReturnCancelBtn?.focus();
    };
    restartBtn.onclick = () => this.resetCurrentMatch();
    if (returnRoleBtn) returnRoleBtn.onclick = () => this.returnToRoleSelect();
    if (battleReturnBtn) battleReturnBtn.onclick = openBattleReturnModal;
    if (battleReturnCancelBtn) battleReturnCancelBtn.onclick = closeBattleReturnModal;
    if (battleReturnConfirmBtn) {
        battleReturnConfirmBtn.onclick = () => {
            closeBattleReturnModal();
            this.returnToRoleSelect();
        };
    }
    if (battleReturnModal) {
        battleReturnModal.onclick = event => {
            if (event.target === battleReturnModal) closeBattleReturnModal();
        };
    }
    if (this.isBo3Mode()) this.resetBo3Match();
    this.battleResult = null;
    this.pendingHumanIndex = 0;
    this.hideEndActions();
    this.roundLog = this.gameMode === '2v2'
        ? `2v2 对决开始！${this.playerA.name} 与 CPU 队友对阵 CPU 双人组。`
        : this.gameMode === 'ffa'
            ? `四人乱斗开始！${this.playerA.name}、CPU 1、CPU 2、CPU 3 各自为战。`
            : `对决开始！${this.playerA.name} [${this.playerA.getRoleName()}] VS CPU [${this.playerB.getRoleName()}]`;
    if (this.isSuddenDeathMode()) {
        this.roundLog = this.getSuddenDeathIntroText();
    }
    this.updateUI();
    if (this.isBo3Mode()) this.showRoundFight(this.matchRound);
};

Game.prototype.bindActionEvents = function() {
    const container = document.getElementById('actions-a');
    const subContainer = document.getElementById('sub-actions-a');
    let targetPicker = document.getElementById('target-picker');
    if (!targetPicker) {
        targetPicker = document.createElement('div');
        targetPicker.id = 'target-picker';
        targetPicker.className = 'target-picker hidden';
        subContainer.insertAdjacentElement('afterend', targetPicker);
    }

    container.onclick = (e) => {
        const action = e.target.dataset.action;
        const actor = this.currentHumanActor();
        if (action === Action.SWORD && actor?.swordState === 'UNLOCKED' && !actor.isParalyzed) {
            this.showBattleToast('这次刀需要使用元素刀');
            this.syncSwordControls(actor);
            targetPicker.classList.add('hidden');
            return;
        }
        if (!action || !actor || !this.canUseAction(actor, action)) return;
        this.chooseTargetOrLock(actor, action, subContainer, targetPicker);
    };

    subContainer.onclick = (e) => {
        const action = e.target.dataset.action;
        const actor = this.currentHumanActor();
        if (!action || !actor || !this.canUseAction(actor, action)) return;
        this.chooseTargetOrLock(actor, action, subContainer, targetPicker);
    };
};

Game.prototype.currentHumanActor = function() {
    return this.playerA.hp > 0 ? this.playerA : null;
};

Game.prototype.needsTarget = function(action) {
    return [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.STEAL, Action.MERCY_DEW, Action.METAL_STORM].includes(action);
};

Game.prototype.validTargetsFor = function(actor, action) {
    if (!this.isMultiplayerMode()) return [];
    if (action === Action.MERCY_DEW) return this.alive(this.alliesOf(actor));
    return this.alive(this.opponentsOf(actor));
};

Game.prototype.chooseTargetOrLock = function(actor, action, subContainer, targetPicker) {
    if (!this.isMultiplayerMode() || !this.needsTarget(action)) {
        this.lockAction(action, subContainer);
        return;
    }
    const targets = this.validTargetsFor(actor, action);
    if (targets.length <= 1) {
        this.lockTeamAction(actor, action, targets[0] || null, subContainer, targetPicker);
        return;
    }
    targetPicker.innerHTML = targets.map(target => `<button type="button" data-target="${target.id}">${this.playerLabel(target)} [${target.getRoleName()}]</button>`).join('');
    targetPicker.classList.remove('hidden');
    targetPicker.onclick = (event) => {
        const targetId = event.target.dataset.target;
        const target = targets.find(item => item.id === targetId);
        if (target) this.lockTeamAction(actor, action, target, subContainer, targetPicker);
    };
};

Game.prototype.lockAction = function(action, subContainer) {
    if (this.isMultiplayerMode()) {
        this.lockTeamAction(this.currentHumanActor(), action, null, subContainer, document.getElementById('target-picker'));
        return;
    }
    this.playerA.currentAction = action;
    subContainer.classList.add('hidden');
    this.updateUI();
    this.scheduleBattleTask(() => {
        this.cpuDecision();
        this.playRoundEffects(this.currentAttackPairs());
        this.updateUI();
        this.scheduleBattleTask(() => this.resolveRound(), 500);
    }, 400);
};

Game.prototype.lockTeamAction = function(actor, action, target, subContainer, targetPicker) {
    if (!actor || actor.currentAction || this.battleResult) return;
    actor.currentAction = action;
    actor.currentTarget = target;
    subContainer.classList.add('hidden');
    targetPicker?.classList.add('hidden');
    this.updateUI();
    this.scheduleBattleTask(() => {
        this.aiControlledPlayers().forEach(cpu => this.cpuDecisionWithoutLockedActions(cpu, this.opponentsOf(cpu), this.alliesOf(cpu)));
        this.playRoundEffects(this.currentAttackPairs());
        this.updateUI();
        this.scheduleBattleTask(() => this.resolveRound(), 500);
    }, 400);
};

Game.prototype.continueCpuOnlyRound = function() {
    if (!this.isMultiplayerMode() || this.battleResult || this.playerA.hp > 0) return;
    this.scheduleBattleTask(() => {
        this.aiControlledPlayers().forEach(cpu => this.cpuDecisionWithoutLockedActions(cpu, this.opponentsOf(cpu), this.alliesOf(cpu)));
        this.playRoundEffects(this.currentAttackPairs());
        this.updateUI();
        this.scheduleBattleTask(() => this.resolveRound(), 500);
    }, 650);
};

Game.prototype.cpuDecision = function() {
    this.cpuDecisionWithoutLockedActions(this.playerB, [this.playerA], [this.playerB]);
};

Game.prototype.cpuDecisionWithoutLockedActions = function(cpu, opponents, allies) {
    const hiddenActions = opponents
        .filter(player => player !== cpu)
        .map(player => ({
            player,
            action: player.currentAction,
            target: player.currentTarget
        }));

    hiddenActions.forEach(({ player }) => {
        player.currentAction = null;
        player.currentTarget = null;
    });
    try {
        this.cpuDecisionFor(cpu, opponents, allies);
    } finally {
        hiddenActions.forEach(({ player, action, target }) => {
            player.currentAction = action;
            player.currentTarget = target;
        });
    }
};

// 初级训练师只按自身资源做简单判断，不读取对手本回合的出招。
Game.prototype.cpuBeginnerDecision = function(cpu, opponents, allies) {
    if (!cpu || cpu.hp <= 0) return;
    this.ensureAiProfile(cpu);

    const aliveOpponents = this.alive(opponents);
    const aliveAllies = this.alive(allies);
    const validActions = Object.values(Action).filter(action => this.canUseAction(cpu, action));
    const weights = {};
    validActions.forEach(action => { weights[action] = 1; });

    if (cpu.isParalyzed) {
        cpu.currentAction = Action.CHARGE;
        cpu.currentTarget = aliveOpponents[0] || null;
        cpu.aiTargetIntent = null;
        cpu.aiTargetIntents = null;
        return;
    }

    const setWeight = (action, value) => {
        if (validActions.includes(action)) weights[action] = value;
    };
    const lowHealth = cpu.hp <= Math.ceil(cpu.maxHp / 2);
    const criticalHealth = cpu.hp <= 1;

    // 新手会优先补足气，再偶尔尝试自己已解锁的招式。
    setWeight(Action.CHARGE, cpu.energy === 0 ? 12 : (cpu.energy < 2 ? 8 : 3));
    setWeight(Action.SWORD, cpu.swordState === 'NORMAL' ? 5 : 0);
    setWeight(Action.ICE_SWORD, cpu.swordState === 'UNLOCKED' ? 4 : 0);
    setWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? 4 : 0);
    setWeight(Action.FIRE, cpu.energy >= 3 ? 5 : 3);
    setWeight(Action.LIGHTNING, cpu.energy >= 4 ? 2 : 0);
    setWeight(Action.SHIELD, criticalHealth ? 4 : (lowHealth ? 2 : 1));
    setWeight(Action.BARRIER, criticalHealth ? 3 : 1);
    setWeight(Action.HOLY_SHIELD, criticalHealth ? 4 : (lowHealth ? 2 : 1));
    setWeight(Action.STEAL, 1);
    setWeight(Action.MERCY_DEW, criticalHealth ? 9 : (lowHealth ? 5 : 1));
    setWeight(Action.METAL_STORM, cpu.metalPoints >= 3 ? 6 : (cpu.metalPoints >= 2 ? 3 : 1));

    // 突然死亡只有一点生命：新手会稍微更怕死，但依旧不会预判敌方招式。
    if (this.isSuddenDeathMode()) {
        setWeight(Action.CHARGE, cpu.energy < 2 ? 8 : 3);
        setWeight(Action.SWORD, cpu.swordState === 'NORMAL' ? 6 : 0);
        setWeight(Action.ICE_SWORD, cpu.swordState === 'UNLOCKED' ? 3 : 0);
        setWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? 3 : 0);
        setWeight(Action.FIRE, cpu.energy >= 3 ? 5 : 3);
        setWeight(Action.LIGHTNING, cpu.energy >= 4 ? 2 : 0);
        setWeight(Action.SHIELD, 3);
        setWeight(Action.BARRIER, 2);
        setWeight(Action.HOLY_SHIELD, 3);
        setWeight(Action.STEAL, 1);
        setWeight(Action.MERCY_DEW, 1);
        setWeight(Action.METAL_STORM, cpu.metalPoints >= 2 ? 4 : 1);
    }

    let totalWeight = validActions.reduce((sum, action) => sum + (weights[action] || 0), 0);
    if (totalWeight <= 0) {
        validActions.forEach(action => { weights[action] = 1; });
        totalWeight = validActions.length;
    }

    let roll = this.aiRandom() * totalWeight;
    let selectedAction = validActions[0] || Action.CHARGE;
    for (const action of validActions) {
        roll -= weights[action] || 0;
        if (roll <= 0) {
            selectedAction = action;
            break;
        }
    }

    cpu.currentAction = selectedAction;
    cpu.currentTarget = this.pickBeginnerTarget(cpu, selectedAction, aliveOpponents, aliveAllies);
    cpu.aiTargetIntent = null;
    cpu.aiTargetIntents = null;
};

Game.prototype.pickBeginnerTarget = function(cpu, action, opponents, allies) {
    if (action === Action.MERCY_DEW) {
        if (cpu.hp < cpu.maxHp) return cpu;
        return allies.find(player => player.hp < player.maxHp) || cpu;
    }
    if ([Action.LIGHTNING, Action.CHARGE, Action.BARRIER, Action.SHIELD, Action.HOLY_SHIELD].includes(action)) return null;
    if (!opponents.length) return null;
    return opponents[Math.floor(this.aiRandom() * opponents.length)];
};

// 根据公开资源状态估计中级训练师最可能的下一招，不读取其已锁定动作。
Game.prototype.predictTrainerAction = function(actor, opponent) {
    const validActions = Object.values(Action).filter(action => this.canUseAction(actor, action));
    const weights = {};
    validActions.forEach(action => { weights[action] = 1; });
    const setWeight = (action, value) => {
        if (validActions.includes(action)) weights[action] = value;
    };
    const enemySpellThreat = opponent && opponent.energy >= 2 && !opponent.isParalyzed;
    const enemySwordThreat = opponent && opponent.swordCount > 0 && opponent.swordState !== 'BROKEN' && !opponent.isParalyzed;
    const lowHealth = actor.hp <= Math.ceil(actor.maxHp / 2);
    const criticalHealth = actor.hp <= 1;

    setWeight(Action.CHARGE, actor.energy < 2 ? 8 : 3);
    setWeight(Action.SWORD, actor.swordState === 'NORMAL' ? 6 : 0);
    setWeight(Action.ICE_SWORD, actor.swordState === 'UNLOCKED' ? (enemySpellThreat ? 8 : 5) : 0);
    setWeight(Action.ELEC_SWORD, actor.swordState === 'UNLOCKED' ? (enemySwordThreat ? 8 : 5) : 0);
    setWeight(Action.FIRE, opponent?.hp <= 2 ? 9 : 4);
    setWeight(Action.LIGHTNING, opponent?.hp <= 3 ? 7 : 3);
    setWeight(Action.SHIELD, enemySwordThreat ? (criticalHealth ? 4 : (lowHealth ? 3 : 2)) : 0);
    setWeight(Action.BARRIER, enemySpellThreat ? (criticalHealth ? 4 : (lowHealth ? 3 : 2)) : 0);
    setWeight(Action.HOLY_SHIELD, (enemySpellThreat || enemySwordThreat) ? (criticalHealth ? 5 : (lowHealth ? 3 : 1)) : 0);
    setWeight(Action.STEAL, actor.role === 'ROGUE' && opponent?.energy <= 1 ? 5 : 2);
    setWeight(Action.MERCY_DEW, actor.role === 'PRIEST' && actor.hp < actor.maxHp ? (criticalHealth ? 12 : 7) : 0);

    // Only completed rounds are remembered. This is a pattern read, never access to
    // the opponent's current locked action.
    const history = actor.publicActionHistory || [];
    const latestAction = history.at(-1);
    const repeatedAction = history.length >= 2 && latestAction === history.at(-2) ? latestAction : null;
    if (latestAction === Action.CHARGE && actor.energy < 2) {
        setWeight(Action.CHARGE, Math.max(weights[Action.CHARGE] || 0, 11));
    }
    if (latestAction === Action.FIRE && actor.energy >= 2) {
        setWeight(Action.FIRE, Math.max(weights[Action.FIRE] || 0, 7));
    }
    if (repeatedAction && validActions.includes(repeatedAction)) {
        setWeight(repeatedAction, Math.max(weights[repeatedAction] || 0, 6));
    }

    if (this.isSuddenDeathMode()) {
        setWeight(Action.CHARGE, actor.energy < 2 ? 8 : 3);
        setWeight(Action.SWORD, actor.swordState === 'NORMAL' ? 7 : 0);
        setWeight(Action.FIRE, 8);
        setWeight(Action.LIGHTNING, 6);
        setWeight(Action.ICE_SWORD, actor.swordState === 'UNLOCKED' ? (enemySpellThreat ? 8 : 5) : 0);
        setWeight(Action.ELEC_SWORD, actor.swordState === 'UNLOCKED' ? (enemySpellThreat ? 6 : 4) : 0);
    }

    const maxWeight = Math.max(...validActions.map(action => weights[action] || 0));
    const bestAction = validActions.find(action => (weights[action] || 0) === maxWeight)
        || validActions[0]
        || Action.CHARGE;
    // 高级训练师大多数时候相信最可能的公开信息推断，仍保留混合预测防止被固定套路反利用。
    if (this.aiRandom() < 0.68) return bestAction;
    const plausibleActions = validActions.filter(action => (weights[action] || 0) >= maxWeight * 0.55);
    const weightedCandidates = plausibleActions.map(action => ({
        action,
        weight: Math.pow(Math.max(0.1, weights[action] || 0), 1.35)
    }));
    const totalWeight = weightedCandidates.reduce((sum, candidate) => sum + candidate.weight, 0);
    let roll = this.aiRandom() * totalWeight;
    for (const candidate of weightedCandidates) {
        roll -= candidate.weight;
        if (roll <= 0) return candidate.action;
    }
    return weightedCandidates[0]?.action || validActions[0] || Action.CHARGE;
};

// 高级训练师的职业对位层：仅使用双方公开属性，不读取当前回合指令。
Game.prototype.pickRoleMatchupAction = function(cpu, target, predicted, validActions, plannedAction) {
    const weights = {};
    validActions.forEach(action => { weights[action] = 1; });
    const addWeight = (action, value) => {
        if (validActions.includes(action)) weights[action] = (weights[action] || 0) + value;
    };
    const targetCanUseSword = target.swordCount > 0
        && target.swordState === 'NORMAL'
        && !target.isParalyzed
        && (!this.isSuddenDeathMode() || target.energy >= 1);
    const targetCanUseElementSword = target.swordCount > 0
        && target.swordState === 'UNLOCKED'
        && target.energy >= 1
        && !target.isParalyzed;
    const targetHasSpellThreat = target.energy >= 2 && !target.isParalyzed;
    const lowHealth = cpu.hp <= Math.ceil(cpu.maxHp / 2);
    const criticalHealth = cpu.hp <= 1;
    const targetHistory = target.publicActionHistory || [];
    const latestTargetAction = targetHistory.at(-1);
    const targetCanStorm = target.role === 'METAL_WARRIOR'
        && !target.hasUsedMetalStorm
        && target.metalPoints > 0
        && target.energy >= 1
        && !target.isParalyzed;
    const targetStormLethal = targetCanStorm && target.metalPoints >= cpu.hp;

    // 对位策略只能微调，不能盖过已经根据资源预测得出的主计划。
    // Preserve the public-information plan as a baseline without suppressing
    // favorable role and style adjustments.
    addWeight(plannedAction, 42);

    if (cpu.aiStyle === 'aggressive') {
        addWeight(Action.FIRE, target.hp <= 2 ? 18 : 9);
        if (!targetCanUseElementSword) addWeight(Action.LIGHTNING, target.hp <= 3 ? 14 : 6);
        if (target.energy <= 1) addWeight(Action.ELEC_SWORD, 8);
    } else if (cpu.aiStyle === 'tactical') {
        if (predicted === Action.CHARGE) addWeight(Action.ELEC_SWORD, 13);
        if (predicted === Action.SWORD || targetCanUseElementSword) addWeight(Action.ELEC_SWORD, 14);
        if (targetHasSpellThreat) addWeight(Action.ICE_SWORD, 13);
        if (target.energy <= 1) addWeight(Action.ELEC_SWORD, 10);
    } else if (cpu.aiStyle === 'pressure') {
        if (target.barrierCount > 0) {
            addWeight(Action.SWORD, 12);
            addWeight(Action.ICE_SWORD, 10);
            addWeight(Action.ELEC_SWORD, 8);
        }
        addWeight(Action.FIRE, target.hp <= 2 ? 17 : 7);
        if (target.energy <= 1) addWeight(Action.ELEC_SWORD, 7);
    } else {
        // 稳健型只对真实存在的资源威胁投入防守，不会因觉醒无气而出盾。
        if (target.energy >= 4) {
            addWeight(Action.ICE_SWORD, 11);
            addWeight(Action.CHARGE, 6);
            if (!criticalHealth) addWeight(Action.HOLY_SHIELD, 5);
        } else if (targetHasSpellThreat) {
            addWeight(Action.BARRIER, lowHealth ? 7 : 3);
            addWeight(Action.ICE_SWORD, 5);
        }
        if (targetCanUseSword && lowHealth) {
            addWeight(Action.SHIELD, 6);
            addWeight(Action.HOLY_SHIELD, 5);
        }
        if (cpu.role === 'PRIEST' && cpu.hp < cpu.maxHp) addWeight(Action.MERCY_DEW, criticalHealth ? 16 : 8);
    }

    // 对手职业决定优先攻击哪一种资源缺口。
    if (target.role === 'PALADIN' && !target.hasBrokenSword) {
        addWeight(Action.FIRE, 6);
        addWeight(Action.LIGHTNING, 6);
        // 首次圣盾免费且可能碎普通刀；除非已预测到其会主动进攻，避免白送刀资源。
        if (cpu.role === 'METAL_WARRIOR') {
            // 金属武者可以把被碎的刀转化为屏障和金属点数，允许主动试探首次圣盾。
            addWeight(Action.SWORD, 10);
        } else if (latestTargetAction !== Action.SWORD) {
            addWeight(Action.SWORD, -8);
        }
    } else if (target.role === 'METAL_WARRIOR') {
        addWeight(Action.LIGHTNING, 6);
        addWeight(Action.FIRE, 5);
        if (target.barrierCount > 0) {
            addWeight(Action.SWORD, -1);
            addWeight(Action.ICE_SWORD, -1);
            addWeight(Action.ELEC_SWORD, -1);
        }
        // 金属点数公开后，先保留一张可完全反制风暴的牌；法术拆屏障不会给其充能。
        if (targetStormLethal) {
            addWeight(Action.ICE_SWORD, 13);
            addWeight(Action.BARRIER, 10);
            addWeight(Action.SHIELD, 9);
            addWeight(Action.HOLY_SHIELD, 8);
            addWeight(Action.FIRE, 5);
            addWeight(Action.LIGHTNING, 5);
        }
    } else if (target.role === 'BARBARIAN') {
        addWeight(Action.FIRE, 6);
        addWeight(Action.LIGHTNING, 5);
    } else if (target.role === 'WARRIOR') {
        addWeight(Action.ELEC_SWORD, 6);
        if (targetCanUseElementSword) addWeight(Action.HOLY_SHIELD, lowHealth ? 4 : 1);
    } else if (target.role === 'PRIEST') {
        addWeight(Action.LIGHTNING, target.hp <= 2 ? 8 : 3);
        addWeight(Action.FIRE, target.hp <= 2 ? 5 : 2);
    } else if (target.role === 'ROGUE') {
        addWeight(Action.FIRE, 5);
        // 神偷尚未用过时，不把“无资源后的必然集气”变成过于明显的送气回合。
        if (!target.hasStolen && target.energy <= 1 && latestTargetAction === Action.CHARGE) {
            addWeight(Action.FIRE, 4);
            addWeight(Action.ELEC_SWORD, 4);
            addWeight(Action.CHARGE, -5);
        }
    }

    // 己方职业资源的使用倾向。
    if (cpu.role === 'WARRIOR') {
        const breakerMatchup = ['PRIEST', 'PALADIN', 'METAL_WARRIOR'].includes(target.role);
        if (cpu.swordState === 'UNLOCKED' && cpu.energy >= 1) {
            addWeight(Action.ICE_SWORD, targetHasSpellThreat ? (breakerMatchup ? 8 : 14) : 7);
            addWeight(Action.ELEC_SWORD, (targetCanUseSword || targetCanUseElementSword) ? (breakerMatchup ? 8 : 14) : 8);
            addWeight(Action.FIRE, target.hp <= 2 ? 7 : 3);
            addWeight(Action.CHARGE, 3);
        } else if (cpu.swordState === 'NORMAL') {
            addWeight(Action.SWORD, 7);
            if (target.role === 'PALADIN' && !target.hasUsedFreeHolyShield) {
                addWeight(Action.SWORD, -18);
                addWeight(Action.FIRE, 13);
                addWeight(Action.CHARGE, 8);
            }
            if (target.role === 'METAL_WARRIOR' && target.barrierCount > 0) {
                addWeight(Action.SWORD, -12);
                addWeight(Action.LIGHTNING, 12);
                addWeight(Action.CHARGE, 9);
            }
            if (predicted === Action.CHARGE || predicted === Action.SWORD) addWeight(Action.FIRE, 9);
        }
        if (breakerMatchup && target.hp > 1) {
            if (cpu.energy < 4) {
                addWeight(Action.CHARGE, cpu.energy <= 1 ? 17 : 11);
                addWeight(Action.FIRE, cpu.energy >= 2 ? 7 : 0);
            } else {
                addWeight(Action.LIGHTNING, 24);
                addWeight(Action.FIRE, 12);
                addWeight(Action.ICE_SWORD, 7);
                addWeight(Action.ELEC_SWORD, 7);
            }
        }
    } else if (cpu.role === 'ROGUE' && !cpu.hasStolen) {
        // 神偷只押注于可由历史和资源合理推断的集气窗口，避免无效消耗一次专属技能。
        const likelyCharge = latestTargetAction === Action.CHARGE
            || (target.energy === 0 && target.swordState !== 'UNLOCKED');
        addWeight(Action.STEAL, likelyCharge ? 12 : 1);
    } else if (cpu.role === 'PALADIN' && !cpu.hasBrokenSword && targetCanUseSword) {
        addWeight(Action.HOLY_SHIELD, latestTargetAction === Action.SWORD ? (lowHealth ? 15 : 9) : (lowHealth ? 6 : 2));
    } else if (cpu.role === 'METAL_WARRIOR' && cpu.swordCount <= 0 && cpu.barrierCount > 0) {
        addWeight(Action.BARRIER, 6);
    } else if (cpu.role === 'BARBARIAN') {
        addWeight(Action.FIRE, 4);
        if (cpu.swordState === 'NORMAL') addWeight(Action.SWORD, 4);
    }

    // These three bruiser / tempo roles must not turn their mirror matches into a wall-building contest.
    if (cpu.role === target.role && ["ROGUE", "BARBARIAN", "PALADIN"].includes(cpu.role)) {
        if (cpu.role === 'ROGUE') {
            addWeight(Action.FIRE, 16);
            addWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? 10 : 0);
            if (target.energy <= 1 && !target.hasStolen) addWeight(Action.SWORD, 6);
        } else if (cpu.role === 'BARBARIAN') {
            addWeight(Action.FIRE, 15);
            addWeight(Action.SWORD, cpu.swordState === 'NORMAL' ? 12 : 0);
            addWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? 9 : 0);
        } else {
            addWeight(Action.FIRE, 14);
            addWeight(Action.LIGHTNING, 11);
            addWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? 7 : 0);
        }
        // Do not spend a mirror turn on additional defense unless there is a real spell threat.
        if (!targetHasSpellThreat) {
            if (validActions.includes(Action.BARRIER)) weights[Action.BARRIER] = 0;
            if (validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = 0;
            if (validActions.includes(Action.HOLY_SHIELD) && cpu.role !== 'PALADIN') weights[Action.HOLY_SHIELD] = 0;
        }
    }

    if (target.energy >= 4) {
        // 高气局中普通盾牌与屏障都无法处理狂雷，不让稳健型误入保守分支。
        if (validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = 0;
        if (validActions.includes(Action.BARRIER)) weights[Action.BARRIER] = 0;
    }
    if (target.energy <= 1 && validActions.includes(Action.ELEC_SWORD)) {
        // 低气局优先电刀：对集气造成伤害，也能压制仍可使用的刀类招式。
        weights[Action.ICE_SWORD] = 0;
        addWeight(Action.ELEC_SWORD, 22);
    }

    if (cpu.role === 'METAL_WARRIOR' && validActions.includes(Action.METAL_STORM)) {
        const predictedCounter = [Action.ICE_SWORD, Action.BARRIER, Action.SHIELD, Action.HOLY_SHIELD, Action.STEAL, Action.MERCY_DEW].includes(predicted);
        const conservedCounter = (target.role === 'PALADIN' && !target.hasUsedFreeHolyShield)
            || (target.role === 'ROGUE' && !target.hasStolen);
        if (cpu.metalPoints >= target.hp && !predictedCounter && !conservedCounter) addWeight(Action.METAL_STORM, 24);
        if (predictedCounter || conservedCounter) weights[Action.METAL_STORM] = 0;
    }

    // With no immediate spell or sword threat, avoid wasting a turn on defense.
    // Metal Warrior keeps its barrier-to-sword conversion setup when disarmed.
    if (!targetHasSpellThreat && !targetCanUseSword) {
        if (validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = 0;
        if (validActions.includes(Action.HOLY_SHIELD) && cpu.role !== 'PALADIN') weights[Action.HOLY_SHIELD] = 0;
        if (validActions.includes(Action.BARRIER) && !(cpu.role === 'METAL_WARRIOR' && cpu.swordCount <= 0)) {
            weights[Action.BARRIER] = 0;
        }
    }

    const totalWeight = validActions.reduce((sum, action) => sum + Math.max(0, weights[action] || 0), 0);
    if (totalWeight <= 0) return plannedAction;
    let roll = this.aiRandom() * totalWeight;
    for (const action of validActions) {
        roll -= Math.max(0, weights[action] || 0);
        if (roll <= 0) return action;
    }
    return plannedAction;
};

// Advanced trainers only use public resources and completed-action history here.
// This layer turns a visible advantage into pressure instead of repeatedly banking defense.
Game.prototype.pickAdvancedPublicPressureAction = function(cpu, target, validActions, predicted) {
    const isHolyAction = action => [Action.HOLY_SHIELD, Action.STEAL, Action.MERCY_DEW].includes(action);
    const fireBlocked = [Action.FIRE, Action.BARRIER, Action.ICE_SWORD].includes(predicted) || isHolyAction(predicted);
    const lightningBlocked = [Action.CHARGE, Action.ICE_SWORD, Action.LIGHTNING].includes(predicted);
    const stormBlocked = [Action.BARRIER, Action.SHIELD, Action.ICE_SWORD].includes(predicted) || isHolyAction(predicted);
    const swordBlocked = [Action.SHIELD, Action.BARRIER, Action.FIRE, Action.ICE_SWORD, Action.ELEC_SWORD].includes(predicted) || isHolyAction(predicted);
    const options = [];
    const add = (action, weight) => {
        if (validActions.includes(action) && weight > 0) options.push({ action, weight });
    };
    const targetHasReservedStormCounter = (target.role === 'PALADIN' && !target.hasUsedFreeHolyShield)
        || (target.role === 'ROGUE' && !target.hasStolen);
    const canLethalStorm = cpu.role === 'METAL_WARRIOR'
        && !cpu.hasUsedMetalStorm
        && cpu.metalPoints >= target.hp
        && !targetHasReservedStormCounter;
    const lethalTarget = target.hp <= 1;
    const stalledRounds = this.aiDuelStallRounds || 0;

    // After several quiet rounds, take the best available public-information line.
    // This is deterministic on purpose: random attacks were creating fresh mirror stalls.
    const mirrorAggressor = cpu.role === target.role && ['ROGUE', 'BARBARIAN', 'PALADIN'].includes(cpu.role);
    if (stalledRounds >= (mirrorAggressor ? 1 : 3)) {
        const pressureVariant = this.getMirrorPressureVariant(cpu, target);
        if (target.isCpuControlled && stalledRounds >= 4) {
            const antiStallOrder = pressureVariant
                ? [Action.FIRE, Action.ICE_SWORD, Action.ELEC_SWORD, Action.SWORD]
                : [Action.CHARGE, Action.FIRE, Action.ELEC_SWORD, Action.SWORD];
            const antiStallAction = antiStallOrder.find(action => validActions.includes(action));
            if (antiStallAction) return antiStallAction;
        }
        const mirrorOrder = cpu.role === 'PALADIN'
            ? [Action.LIGHTNING, Action.FIRE, Action.ELEC_SWORD, Action.SWORD, Action.ICE_SWORD]
            : (cpu.role === 'ROGUE'
                ? [Action.FIRE, Action.ELEC_SWORD, Action.SWORD, Action.ICE_SWORD, Action.LIGHTNING]
                : [Action.FIRE, Action.SWORD, Action.ELEC_SWORD, Action.ICE_SWORD, Action.LIGHTNING]);
        const directOrder = pressureVariant
            ? mirrorOrder
            : [...mirrorOrder].reverse();
        const forceOrder = [];
        if (canLethalStorm && !stormBlocked) forceOrder.push(Action.METAL_STORM);
        // Different pressure variants deliberately split mirror matchups into distinct attack lines.
        directOrder.forEach(action => {
            if (action === Action.FIRE && fireBlocked) return;
            if (action === Action.LIGHTNING && lightningBlocked) return;
            if (action === Action.SWORD && swordBlocked) return;
            forceOrder.push(action);
        });
        forceOrder.push(...directOrder);
        const forcedAction = forceOrder.find(action => validActions.includes(action));
        if (forcedAction) return forcedAction;
    }

    // A visible lethal should be cashed in when the public prediction does not show a counter.
    if (lethalTarget) {
        if (!lightningBlocked) add(Action.LIGHTNING, 110);
        if (canLethalStorm && !stormBlocked) add(Action.METAL_STORM, 106);
        if (!fireBlocked) add(Action.FIRE, 98);
        if ([Action.FIRE, Action.LIGHTNING, Action.CHARGE].includes(predicted)) add(Action.ICE_SWORD, 94);
        if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(predicted)) add(Action.ELEC_SWORD, 90);
        if (!swordBlocked) add(Action.SWORD, 76);
    }

    // Two quiet rounds is enough: force a legal attack to keep matches moving.
    if (!options.length && stalledRounds >= 2) {
        if (!fireBlocked) add(Action.FIRE, 34);
        if (!lightningBlocked) add(Action.LIGHTNING, 30);
        if (canLethalStorm && !stormBlocked) add(Action.METAL_STORM, 38);
        if (!swordBlocked) add(Action.SWORD, 24);
        if ([Action.FIRE, Action.LIGHTNING].includes(predicted)) add(Action.ICE_SWORD, 22);
        if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(predicted)) add(Action.ELEC_SWORD, 20);

    }

    if (!options.length) return null;
    const total = options.reduce((sum, option) => sum + option.weight, 0);
    let roll = this.aiRandom() * total;
    for (const option of options) {
        roll -= option.weight;
        if (roll <= 0) return option.action;
    }
    return options[0].action;
};

Game.prototype.pickAdvancedMirrorAggressionAction = function(cpu, target, validActions) {
    if (cpu.role !== target.role || !['ROGUE', 'BARBARIAN', 'PALADIN'].includes(cpu.role)) return null;
    // At critical health, keep normal counterplay available. Otherwise these mirror matches must advance.
    if (cpu.hp <= 1) return null;

    const pressureVariant = this.getMirrorPressureVariant(cpu, target);
    let attackOrder;
    if (cpu.role === 'PALADIN') {
        attackOrder = pressureVariant
            ? [Action.FIRE, Action.LIGHTNING, Action.ELEC_SWORD, Action.SWORD, Action.ICE_SWORD]
            : [Action.SWORD, Action.FIRE, Action.ICE_SWORD, Action.ELEC_SWORD, Action.LIGHTNING];
    } else if (cpu.role === 'ROGUE') {
        attackOrder = pressureVariant
            ? [Action.FIRE, Action.ELEC_SWORD, Action.SWORD, Action.ICE_SWORD, Action.LIGHTNING]
            : [Action.SWORD, Action.FIRE, Action.ICE_SWORD, Action.ELEC_SWORD, Action.LIGHTNING];
    } else {
        attackOrder = pressureVariant
            ? [Action.FIRE, Action.SWORD, Action.ELEC_SWORD, Action.ICE_SWORD, Action.LIGHTNING]
            : [Action.SWORD, Action.FIRE, Action.ICE_SWORD, Action.ELEC_SWORD, Action.LIGHTNING];
    }

    return attackOrder.find(action => validActions.includes(action)) || null;
};

Game.prototype.scoreAdvancedTarget = function(cpu, target, allies) {
    let score = (target.maxHp - target.hp) * 7 + target.energy * 2;
    if (target.hp <= 1) score += 22;
    else if (target.hp <= 2) score += 11;
    if (target.energy >= 4 && !target.isParalyzed) score += 10;
    if (target.swordCount > 0 && target.swordState === 'UNLOCKED' && target.energy >= 1) score += 5;
    if (target.role === 'METAL_WARRIOR' && !target.hasUsedMetalStorm) {
        score += (target.metalPoints || 0) * 4;
        if ((target.metalPoints || 0) >= cpu.hp && target.energy >= 1) score += 12;
    }
    if (target.role === 'PALADIN' && !target.hasUsedFreeHolyShield) score += 3;
    if (target.role === 'ROGUE' && !target.hasStolen) score += 2;

    if (this.gameMode === 'ffa') {
        score += target.hp * 1.5;
        if (target.hp === Math.max(...this.alive(this.getPlayers()).map(player => player.hp))) score += 4;
    }

    const committedAllies = this.alive(allies).filter(ally => ally !== cpu && ally.currentTarget === target);
    committedAllies.forEach(ally => {
        const singleTargetAttack = [
            Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD,
            Action.STEAL, Action.METAL_STORM
        ].includes(ally.currentAction);
        if (singleTargetAttack) score -= target.hp <= 1 ? 50 : 7;
    });
    return score;
};

Game.prototype.pickAdvancedTarget = function(cpu, opponents, allies) {
    return this.alive(opponents)
        .slice()
        .sort((a, b) => this.scoreAdvancedTarget(cpu, b, allies) - this.scoreAdvancedTarget(cpu, a, allies))[0]
        || null;
};

Game.prototype.advancedPlanForAction = function(cpu, action, enemyTarget, allies) {
    if (!action) return null;
    if (action === Action.MERCY_DEW) {
        const healTarget = this.alive(allies)
            .slice()
            .sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0] || cpu;
        return { action, target: healTarget };
    }
    return {
        action,
        target: this.needsTarget(action) ? enemyTarget : null
    };
};

Game.prototype.pickAdvancedRoleTacticAction = function(cpu, target, predicted, validActions) {
    const legal = action => validActions.includes(action);
    const pickWeighted = choices => {
        const available = choices.filter(choice => legal(choice.action) && choice.weight > 0);
        if (!available.length) return null;
        let roll = this.aiRandom() * available.reduce((sum, choice) => sum + choice.weight, 0);
        for (const choice of available) {
            roll -= choice.weight;
            if (roll <= 0) return choice.action;
        }
        return available[0].action;
    };
    const predictedSpell = [Action.FIRE, Action.LIGHTNING, Action.METAL_STORM].includes(predicted);

    if (cpu.role === 'PRIEST' && legal(Action.MERCY_DEW) && cpu.hp <= 2) {
        if (cpu.hp <= 1 || predictedSpell || this.aiRandom() < 0.68) return Action.MERCY_DEW;
    }

    if (cpu.role === 'PALADIN' && legal(Action.HOLY_SHIELD) && !cpu.hasUsedFreeHolyShield) {
        if (predicted === Action.SWORD) return Action.HOLY_SHIELD;
        if (cpu.hp <= 2 && predicted === Action.FIRE) return Action.HOLY_SHIELD;
    }

    if (cpu.role === 'ROGUE' && legal(Action.STEAL) && predicted === Action.CHARGE) {
        return this.aiRandom() < 0.72 ? Action.STEAL : null;
    }

    if (cpu.role === 'BARBARIAN' && target.energy <= 1 && cpu.hp > 1) {
        return pickWeighted([
            { action: Action.FIRE, weight: target.barrierCount > 0 ? 3 : 14 },
            { action: Action.SWORD, weight: cpu.swordState === 'NORMAL' ? 10 : 0 },
            { action: Action.ELEC_SWORD, weight: cpu.swordState === 'UNLOCKED' ? 8 : 0 }
        ]);
    }

    return null;
};

Game.prototype.cpuAdvancedFieldPlan = function(cpu, opponents, allies) {
    const aliveOpponents = this.alive(opponents);
    const validActions = Object.values(Action).filter(action => this.canUseAction(cpu, action));
    const target = this.pickAdvancedTarget(cpu, aliveOpponents, allies);
    if (!target || !validActions.length) return null;

    const publicPrediction = target.isParalyzed ? Action.CHARGE : this.predictTrainerAction(target, cpu);
    const pressureAction = this.pickAdvancedPublicPressureAction(cpu, target, validActions, publicPrediction);
    if (pressureAction) {
        return this.advancedPlanForAction(cpu, pressureAction, target, allies);
    }
    const mirrorAggressionAction = this.pickAdvancedMirrorAggressionAction(cpu, target, validActions);
    if (mirrorAggressionAction) {
        return this.advancedPlanForAction(cpu, mirrorAggressionAction, target, allies);
    }
    const roleTacticAction = this.pickAdvancedRoleTacticAction(cpu, target, publicPrediction, validActions);
    if (roleTacticAction) {
        return this.advancedPlanForAction(cpu, roleTacticAction, target, allies);
    }
    const targetCanCounterMetalStorm = (target.energy >= 1
            && target.swordCount > 0
            && target.swordState === 'UNLOCKED'
            && !target.isParalyzed)
        || (target.role === 'PALADIN' && !target.hasUsedFreeHolyShield)
        || (target.role === 'ROGUE' && !target.hasStolen);
    const targetLikelyBlocksMetalStorm = [Action.ICE_SWORD, Action.BARRIER, Action.SHIELD, Action.HOLY_SHIELD, Action.STEAL, Action.MERCY_DEW].includes(publicPrediction);
    if (validActions.includes(Action.METAL_STORM)
        && cpu.metalPoints >= target.hp
        && target.energy < 1
        && !targetCanCounterMetalStorm
        && !targetLikelyBlocksMetalStorm) {
        return this.advancedPlanForAction(cpu, Action.METAL_STORM, target, allies);
    }

    const pick = (...actions) => {
        const legalActions = actions.filter(action => validActions.includes(action));
        if (!legalActions.length) return null;
        const styleIndex = cpu.aiStyle === 'tactical' ? 1 : (cpu.aiStyle === 'pressure' ? 2 : 0);
        let choiceIndex = Math.min(styleIndex, legalActions.length - 1);
        // 小概率变招打破高级训练师的镜像循环，仍限定在同一组合理反制内。
        if (legalActions.length > 1 && this.aiRandom() < 0.12) {
            choiceIndex = (choiceIndex + 1) % legalActions.length;
        }
        return legalActions[choiceIndex];
    };

    const stallRounds = this.aiDuelStallRounds || 0;
    const shouldBreakStall = stallRounds >= 1 && (cpu.aiStyle !== 'steady' || stallRounds >= 2);
    if (shouldBreakStall) {
        if (cpu.swordState === 'UNLOCKED' && cpu.energy === 1) {
            const action = cpu.aiPressureVariant
                ? (validActions.includes(Action.ELEC_SWORD) ? Action.ELEC_SWORD : null)
                : (validActions.includes(Action.CHARGE) ? Action.CHARGE : null);
            if (action) {
                return this.advancedPlanForAction(cpu, action, target, allies);
            }
        }
        const pressureActions = cpu.aiStyle === 'tactical'
            ? (cpu.aiPressureVariant ? [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.LIGHTNING] : [Action.ELEC_SWORD, Action.ICE_SWORD, Action.LIGHTNING, Action.FIRE, Action.SWORD])
            : (cpu.aiStyle === 'pressure'
                ? (cpu.aiPressureVariant ? [Action.SWORD, Action.FIRE, Action.LIGHTNING, Action.ELEC_SWORD, Action.ICE_SWORD] : [Action.LIGHTNING, Action.FIRE, Action.SWORD, Action.ELEC_SWORD, Action.ICE_SWORD])
                : (cpu.aiPressureVariant ? [Action.SWORD, Action.ELEC_SWORD, Action.ICE_SWORD, Action.FIRE, Action.LIGHTNING] : [Action.FIRE, Action.LIGHTNING, Action.ELEC_SWORD, Action.ICE_SWORD, Action.SWORD]));
        const action = pressureActions.find(candidate => validActions.includes(candidate)) || null;
        if (action) {
            return this.advancedPlanForAction(cpu, action, target, allies);
        }
    }

    // 4 气以上同时存在狂雷、火冲与出刀威胁：做资源博弈，而非固定集气。
    if (!target.isParalyzed && target.energy >= 4) {
        const targetCanUseIce = target.swordCount > 0
            && target.swordState === 'UNLOCKED'
            && target.energy >= 1
            && !target.isParalyzed;
        const highEnergyChoices = [];
        const addChoice = (action, weight) => {
            if (validActions.includes(action) && weight > 0) highEnergyChoices.push({ action, weight });
        };

        // 冰刀覆盖两种法术；对方不能冰刀时，狂雷可压制其普通刀与火冲。
        addChoice(Action.ICE_SWORD, 15);
        if (!targetCanUseIce) addChoice(Action.LIGHTNING, 12);
        if (target.swordState === 'NORMAL') addChoice(Action.FIRE, target.hp <= 2 ? 11 : 7);
        // 只剩 1 点血时，圣盾仍会被狂雷余波击穿，不能当作安全解。
        addChoice(Action.HOLY_SHIELD, cpu.hp > 1 ? 3 : 0);
        // 集气只作为无法稳妥反制时的备选，绝不再是唯一答案。
        addChoice(Action.CHARGE, target.swordState === 'NORMAL' ? 2 : 5);

        const totalWeight = highEnergyChoices.reduce((sum, choice) => sum + choice.weight, 0);
        if (totalWeight > 0) {
            let roll = this.aiRandom() * totalWeight;
            let action = highEnergyChoices[0].action;
            for (const choice of highEnergyChoices) {
                roll -= choice.weight;
                if (roll <= 0) {
                    action = choice.action;
                    break;
                }
            }
            const matchupAction = this.pickRoleMatchupAction(cpu, target, null, validActions, action);
            return this.advancedPlanForAction(cpu, matchupAction, target, allies);
        }
    }

    const predicted = publicPrediction;
    let action = null;

    if (predicted === Action.CHARGE) {
        action = target.energy <= 1
            ? pick(Action.FIRE, Action.STEAL, Action.ELEC_SWORD, Action.SWORD)
            : pick(Action.FIRE, Action.STEAL, Action.ICE_SWORD, Action.ELEC_SWORD, Action.SWORD);
    }
    else if (predicted === Action.SWORD) {
        if (cpu.aiStyle === 'tactical') {
            action = pick(Action.ELEC_SWORD, Action.FIRE, Action.LIGHTNING);
        } else if (cpu.aiStyle === 'pressure') {
            action = pick(Action.FIRE, Action.ELEC_SWORD, Action.LIGHTNING);
        } else {
            action = pick(Action.FIRE, Action.LIGHTNING, Action.ELEC_SWORD, Action.SHIELD, Action.HOLY_SHIELD);
        }
    }
    else if (predicted === Action.FIRE) action = pick(Action.LIGHTNING, Action.ICE_SWORD, Action.BARRIER, Action.HOLY_SHIELD);
    else if (predicted === Action.LIGHTNING) action = pick(Action.ICE_SWORD, Action.CHARGE, Action.HOLY_SHIELD);
    else if (predicted === Action.ICE_SWORD) action = pick(Action.ELEC_SWORD, Action.SHIELD, Action.CHARGE);
    else if (predicted === Action.ELEC_SWORD) action = pick(Action.LIGHTNING, Action.ELEC_SWORD, Action.SHIELD);
    else if (predicted === Action.BARRIER) action = pick(Action.LIGHTNING, Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD);
    else if (predicted === Action.SHIELD) action = pick(Action.LIGHTNING, Action.FIRE, Action.CHARGE);
    else if ([Action.HOLY_SHIELD, Action.STEAL, Action.MERCY_DEW].includes(predicted)) action = pick(Action.LIGHTNING, Action.CHARGE, Action.BARRIER);

    // 低血量时优先兑现伤害；濒危时仍允许保命招式覆盖预测计划。
    if (target.hp <= 2 && validActions.includes(Action.FIRE) && predicted !== Action.BARRIER && predicted !== Action.ICE_SWORD && ![Action.HOLY_SHIELD, Action.STEAL, Action.MERCY_DEW].includes(predicted)) {
        action = Action.FIRE;
    }
    if (cpu.hp <= 1 && predicted === Action.FIRE) action = pick(Action.ICE_SWORD, Action.BARRIER, Action.HOLY_SHIELD, action);
    if (cpu.hp <= 1 && predicted === Action.LIGHTNING) action = pick(Action.ICE_SWORD, Action.CHARGE, Action.HOLY_SHIELD, action);

    if (!action) return null;
    action = this.pickRoleMatchupAction(cpu, target, predicted, validActions, action);
    return this.advancedPlanForAction(cpu, action, target, allies);
};

// 中级和高级训练师只读取回合开始时公开的战场状态，不读取玩家已锁定的招式。
Game.prototype.cpuFieldDecision = function(cpu, opponents, allies) {
    if (!cpu || cpu.hp <= 0) return;
    this.ensureAiProfile(cpu);
    cpu.isCpuControlled = true;

    const aliveOpponents = this.alive(opponents);
    const aliveAllies = this.alive(allies);
    const validActions = Object.values(Action).filter(action => this.canUseAction(cpu, action));
    const weights = {};
    validActions.forEach(action => { weights[action] = 1; });

    if (cpu.isParalyzed) {
        cpu.currentAction = Action.CHARGE;
        cpu.currentTarget = null;
        cpu.aiTargetIntent = null;
        cpu.aiTargetIntents = null;
        return;
    }

    if (this.cpuDifficulty === 'hard') {
        const plan = this.cpuAdvancedFieldPlan(cpu, aliveOpponents, aliveAllies);
        if (plan) {
            cpu.currentAction = plan.action;
            cpu.currentTarget = plan.target;
            cpu.aiTargetIntent = null;
            cpu.aiTargetIntents = null;
            return;
        }
    }

    const setWeight = (action, value) => {
        if (validActions.includes(action)) weights[action] = Math.max(0, value);
    };
    const woundedAlly = aliveAllies.slice().sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0];
    const pressureTarget = aliveOpponents.slice().sort((a, b) => a.hp - b.hp || b.energy - a.energy)[0] || null;
    const lowEnergyPressureTarget = pressureTarget && pressureTarget.energy <= 1 && !pressureTarget.isParalyzed;
    const lowestEnergyTarget = aliveOpponents.slice().sort((a, b) => a.energy - b.energy || a.hp - b.hp)[0] || null;
    const highestEnergy = Math.max(0, ...aliveOpponents.map(player => player.energy));
    const lowHp = pressureTarget?.hp ?? Infinity;
    const enemySpellThreat = aliveOpponents.some(player => player.energy >= 2 && !player.isParalyzed);
    const enemyLightningThreat = aliveOpponents.some(player => player.energy >= 4 && !player.isParalyzed);
    const canOpponentUseNormalSword = player => player.swordCount > 0
        && player.swordState === 'NORMAL'
        && !player.isParalyzed
        && (!this.isSuddenDeathMode() || player.energy >= 1);
    const canOpponentUseElementSword = player => player.swordCount > 0
        && player.swordState === 'UNLOCKED'
        && player.energy >= 1
        && !player.isParalyzed;
    const enemySwordThreat = aliveOpponents.some(player => canOpponentUseNormalSword(player) || canOpponentUseElementSword(player));
    const enemyElementThreat = aliveOpponents.some(canOpponentUseElementSword);
    const enemyCanIce = aliveOpponents.some(canOpponentUseElementSword);
    const lowHealth = cpu.hp <= Math.ceil(cpu.maxHp / 2);
    const criticalHealth = cpu.hp <= 1;
    const hard = this.cpuDifficulty === 'hard';
    const pressureTargetCanIce = !!pressureTarget
        && pressureTarget.swordCount > 0
        && pressureTarget.swordState === 'UNLOCKED'
        && pressureTarget.energy >= 1
        && !pressureTarget.isParalyzed;
    const pressureTargetCanHoly = !!pressureTarget
        && (pressureTarget.energy >= 1
            || (pressureTarget.role === 'PALADIN' && !pressureTarget.hasUsedFreeHolyShield));
    const pressureTargetHasBarrier = !!pressureTarget && pressureTarget.barrierCount > 0;
    const pressureTargetHasSword = !!pressureTarget
        && (canOpponentUseNormalSword(pressureTarget) || canOpponentUseElementSword(pressureTarget));
    const highestOpponentEnergy = pressureTarget ? Math.max(...aliveOpponents.map(player => player.energy)) : 0;
    const energyLead = cpu.energy - highestOpponentEnergy;
    const paralyzedTarget = aliveOpponents.filter(player => player.isParalyzed)
        .sort((a, b) => a.hp - b.hp || b.energy - a.energy)[0] || null;
    let forcedPressureAction = null;

    setWeight(Action.CHARGE, cpu.energy < 2 ? (hard ? 9 : 8) : (hard ? 1 : 3));
    setWeight(Action.SWORD, cpu.swordState === 'NORMAL' ? (hard ? 9 : 6) : 0);
    setWeight(Action.ICE_SWORD, cpu.swordState === 'UNLOCKED' ? (enemySpellThreat ? (hard ? 13 : 8) : (hard ? 6 : 5)) : 0);
    setWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? (enemySwordThreat ? (hard ? 13 : 8) : (hard ? 6 : 5)) : 0);
    setWeight(Action.FIRE, lowHp <= 2 ? (hard ? 16 : 9) : (hard ? 6 : 4));
    setWeight(Action.LIGHTNING, lowHp <= 3 ? (enemyCanIce ? (hard ? 9 : 4) : (hard ? 18 : 7)) : (hard ? 5 : 3));

    // 防御仅基于对手可用资源，不根据其本回合已经选中的动作反制。
    setWeight(Action.SHIELD, enemySwordThreat ? (criticalHealth ? 7 : (lowHealth ? 4 : 2)) : 0);
    setWeight(Action.BARRIER, enemySpellThreat ? (criticalHealth ? 6 : (lowHealth ? 4 : 2)) : 0);
    setWeight(Action.HOLY_SHIELD, (enemySpellThreat || enemySwordThreat) ? (criticalHealth ? 7 : (lowHealth ? 4 : 1)) : 0);
    setWeight(Action.STEAL, lowestEnergyTarget && lowestEnergyTarget.energy <= 1 ? (hard ? 9 : 4) : (hard ? 3 : 2));
    setWeight(Action.MERCY_DEW, woundedAlly && woundedAlly.hp < woundedAlly.maxHp ? (criticalHealth ? 14 : (lowHealth ? 9 : 4)) : 0);
    if (pressureTarget) {
        const stormWeight = cpu.metalPoints >= pressureTarget.hp
            ? (pressureTargetCanIce || pressureTargetCanHoly ? 8 : 24)
            : (cpu.metalPoints >= 3 ? 9 : (cpu.metalPoints >= 2 ? 4 : 1));
        setWeight(Action.METAL_STORM, stormWeight);
    }

    // 0/1 气无法释放法术，电刀同时覆盖集气伤害和刀类麻痹，优于冰刀。
    if (lowEnergyPressureTarget && validActions.includes(Action.ELEC_SWORD)) {
        setWeight(Action.ELEC_SWORD, hard ? 18 : 12);
        if (validActions.includes(Action.ICE_SWORD)) setWeight(Action.ICE_SWORD, 0);
    }

    if (cpu.swordState === 'UNLOCKED' && cpu.energy < 1) setWeight(Action.CHARGE, hard ? 12 : 10);
    if (hard && highestEnergy >= 4 && cpu.hp > 1) setWeight(Action.HOLY_SHIELD, Math.max(weights[Action.HOLY_SHIELD] || 0, 6));
    if (hard && !enemySwordThreat) setWeight(Action.SHIELD, 0);
    if (hard && !enemySpellThreat) setWeight(Action.BARRIER, 0);

    if (hard && pressureTarget) {
        // 高级训练师用可见的防御资源判断是否进入强攻回合。
        const attackWindow = lowHp <= 2 || (!pressureTargetHasBarrier && energyLead >= 1) || (!pressureTargetHasSword && highestOpponentEnergy <= 1);

        if (lowHp <= 2) {
            setWeight(Action.FIRE, pressureTargetHasBarrier ? 11 : (pressureTargetCanIce || pressureTargetCanHoly ? 21 : 30));
            setWeight(Action.LIGHTNING, pressureTargetCanIce ? 10 : (pressureTargetCanHoly ? 15 : 28));
        } else if (energyLead >= 2 && !pressureTargetHasBarrier) {
            setWeight(Action.FIRE, pressureTargetCanIce || pressureTargetCanHoly ? 10 : 17);
            setWeight(Action.LIGHTNING, pressureTargetCanIce ? 7 : 14);
        }

        // 屏障是可见的进攻节奏点：优先拆除，为下一回合的火冲或狂雷铺路。
        if (pressureTargetHasBarrier) {
            setWeight(Action.SWORD, cpu.swordState === 'NORMAL' ? 15 : 0);
            setWeight(Action.ICE_SWORD, cpu.swordState === 'UNLOCKED' ? 12 : 0);
            setWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? 10 : 0);
        }

        // 对手气少时，高级训练师主动扩大战果；气高时保留冰刀和圣盾作为公开威胁的应对。
        if (highestOpponentEnergy <= 1 && cpu.energy >= 2) {
            setWeight(Action.FIRE, Math.max(weights[Action.FIRE] || 0, 15));
            if (cpu.swordState === 'NORMAL') setWeight(Action.SWORD, Math.max(weights[Action.SWORD] || 0, 12));
        }
        if (enemyLightningThreat) {
            setWeight(Action.ICE_SWORD, Math.max(weights[Action.ICE_SWORD] || 0, 15));
            setWeight(Action.HOLY_SHIELD, Math.max(weights[Action.HOLY_SHIELD] || 0, cpu.hp <= 2 ? 8 : 5));
        }
        if (enemyElementThreat) setWeight(Action.ELEC_SWORD, Math.max(weights[Action.ELEC_SWORD] || 0, 14));

        // 优势回合减少无意义防御，迫使对手持续应对进攻压力。
        if (attackWindow && !criticalHealth) {
            setWeight(Action.SHIELD, Math.min(weights[Action.SHIELD] || 0, 1));
            setWeight(Action.BARRIER, Math.min(weights[Action.BARRIER] || 0, 1));
            if (!enemyLightningThreat) setWeight(Action.HOLY_SHIELD, Math.min(weights[Action.HOLY_SHIELD] || 0, 2));
        }
    }

    if (hard && paralyzedTarget) {
        // 麻痹者只能集气：火冲伤害最高；狂雷会被集气规避，因此不作为追击手段。
        const followUp = [Action.FIRE, Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD]
            .find(action => validActions.includes(action));
        forcedPressureAction = followUp || (validActions.includes(Action.STEAL) ? Action.STEAL : null);
        setWeight(Action.LIGHTNING, 0);
        setWeight(Action.CHARGE, 0);
        setWeight(Action.SHIELD, 0);
        setWeight(Action.BARRIER, 0);
        setWeight(Action.HOLY_SHIELD, 0);
    }

    if (hard && pressureTarget && !paralyzedTarget) {
        const likelyCharge = pressureTarget.energy === 0
            || (pressureTarget.swordState === 'UNLOCKED' && pressureTarget.energy < 1);
        const likelyLightning = pressureTarget.energy >= 4;
        const likelyElementSword = canOpponentUseElementSword(pressureTarget) && !likelyLightning;
        const likelyNormalSword = canOpponentUseNormalSword(pressureTarget) && pressureTarget.energy < 2;
        const likelyFire = pressureTarget.energy >= 2 && !likelyLightning;

        // 按资源状态预测对手的下一步，而不是读取其已经锁定的招式。
        if (likelyCharge) {
            setWeight(Action.FIRE, Math.max(weights[Action.FIRE] || 0, pressureTargetHasBarrier ? 7 : 26));
            setWeight(Action.ICE_SWORD, Math.max(weights[Action.ICE_SWORD] || 0, 14));
            setWeight(Action.ELEC_SWORD, Math.max(weights[Action.ELEC_SWORD] || 0, 13));
            setWeight(Action.STEAL, Math.max(weights[Action.STEAL] || 0, 16));
        }
        if (likelyNormalSword) {
            setWeight(Action.FIRE, Math.max(weights[Action.FIRE] || 0, 22));
            setWeight(Action.ELEC_SWORD, Math.max(weights[Action.ELEC_SWORD] || 0, 16));
            if (cpu.role === 'PALADIN' && !cpu.hasBrokenSword) {
                // 圣骑士只在普通刀最可能出现时，才用首个圣盾争取碎刀收益。
                setWeight(Action.HOLY_SHIELD, Math.max(weights[Action.HOLY_SHIELD] || 0, 14));
            }
        }
        if (likelyElementSword) {
            setWeight(Action.ELEC_SWORD, Math.max(weights[Action.ELEC_SWORD] || 0, 18));
            setWeight(Action.LIGHTNING, Math.max(weights[Action.LIGHTNING] || 0, 14));
        }
        if (likelyFire) {
            setWeight(Action.ICE_SWORD, Math.max(weights[Action.ICE_SWORD] || 0, 17));
            setWeight(Action.BARRIER, Math.max(weights[Action.BARRIER] || 0, lowHealth ? 7 : 4));
        }
        if (likelyLightning) {
            setWeight(Action.ICE_SWORD, Math.max(weights[Action.ICE_SWORD] || 0, 22));
            setWeight(Action.HOLY_SHIELD, Math.max(weights[Action.HOLY_SHIELD] || 0, lowHealth ? 9 : 5));
            setWeight(Action.CHARGE, Math.max(weights[Action.CHARGE] || 0, 7));
        }
        if (cpu.role === 'BARBARIAN' && cpu.energy >= 2 && !pressureTargetHasBarrier) {
            setWeight(Action.FIRE, Math.max(weights[Action.FIRE] || 0, highestOpponentEnergy <= 1 ? 24 : 13));
        }

    }

    // Intermediate trainers react to visible resources and equipment only. They keep
    // weighted uncertainty, unlike advanced trainers' matchup plans and forced plays.
    if (!hard && pressureTarget && !this.isSuddenDeathMode()) {
        const targetCanUseNormalSword = canOpponentUseNormalSword(pressureTarget);
        const targetCanUseElementSword = canOpponentUseElementSword(pressureTarget);
        const targetCanUseIce = targetCanUseElementSword;

        if (pressureTarget.hp <= 2) {
            setWeight(Action.FIRE, targetCanUseIce ? 8 : 14);
            if (!targetCanUseIce) setWeight(Action.LIGHTNING, pressureTarget.hp <= 3 ? 10 : 5);
        }

        if (pressureTarget.barrierCount > 0) {
            setWeight(Action.SWORD, cpu.swordState === 'NORMAL' ? 10 : 0);
            setWeight(Action.ICE_SWORD, cpu.swordState === 'UNLOCKED' ? 9 : 0);
            setWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? 8 : 0);
        }

        if (highestOpponentEnergy >= 4) {
            setWeight(Action.ICE_SWORD, Math.max(weights[Action.ICE_SWORD] || 0, 14));
            setWeight(Action.CHARGE, Math.max(weights[Action.CHARGE] || 0, 5));
            if (validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = 0;
            if (validActions.includes(Action.BARRIER)) weights[Action.BARRIER] = 0;
        } else if (highestOpponentEnergy <= 1 && validActions.includes(Action.ELEC_SWORD)) {
            setWeight(Action.ELEC_SWORD, Math.max(weights[Action.ELEC_SWORD] || 0, 15));
            if (validActions.includes(Action.ICE_SWORD)) weights[Action.ICE_SWORD] = 0;
        }

        if (cpu.swordState === 'UNLOCKED' && cpu.energy < 1) {
            setWeight(Action.CHARGE, Math.max(weights[Action.CHARGE] || 0, 13));
        }
        if (!targetCanUseNormalSword && !targetCanUseElementSword) {
            if (validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = 0;
            if (validActions.includes(Action.HOLY_SHIELD) && cpu.role !== 'PALADIN') {
                weights[Action.HOLY_SHIELD] = Math.min(weights[Action.HOLY_SHIELD] || 0, 1);
            }
        }
        if (cpu.role === 'WARRIOR' && cpu.swordState === 'UNLOCKED' && cpu.energy >= 1) {
            setWeight(Action.ELEC_SWORD, Math.max(weights[Action.ELEC_SWORD] || 0, highestOpponentEnergy <= 1 ? 14 : 9));
            setWeight(Action.ICE_SWORD, Math.max(weights[Action.ICE_SWORD] || 0, highestOpponentEnergy >= 2 ? 10 : 0));
        }
    }

    // 突然死亡中，所有公开威胁都更致命，但训练师仍不读取本回合指令。
    if (this.isSuddenDeathMode()) {
        setWeight(Action.CHARGE, cpu.energy < 2 ? 8 : (hard ? 2 : 3));
        setWeight(Action.SWORD, cpu.swordState === 'NORMAL' ? (hard ? 10 : 7) : 0);
        setWeight(Action.ICE_SWORD, cpu.swordState === 'UNLOCKED' ? (enemySpellThreat ? (hard ? 14 : 8) : 5) : 0);
        setWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? (enemySpellThreat ? (hard ? 10 : 6) : 4) : 0);
        setWeight(Action.FIRE, hard ? 13 : 8);
        setWeight(Action.LIGHTNING, enemyCanIce ? (hard ? 6 : 3) : (hard ? 12 : 6));
        setWeight(Action.SHIELD, enemySwordThreat ? (hard ? 4 : 3) : 1);
        setWeight(Action.BARRIER, enemySpellThreat ? (hard ? 4 : 2) : 1);
        setWeight(Action.HOLY_SHIELD, (enemySpellThreat || enemySwordThreat) ? (hard ? 5 : 3) : 1);
        setWeight(Action.STEAL, lowestEnergyTarget && lowestEnergyTarget.energy <= 1 ? (hard ? 7 : 3) : 1);
        setWeight(Action.MERCY_DEW, 0);

        if (hard && pressureTarget) {
            // 一血模式中，公开的屏障和元素刀状态决定高压或蓄力的取舍。
            if (pressureTargetHasBarrier) {
                setWeight(Action.SWORD, cpu.swordState === 'NORMAL' ? 16 : 0);
                setWeight(Action.ICE_SWORD, cpu.swordState === 'UNLOCKED' ? 12 : 0);
                setWeight(Action.ELEC_SWORD, cpu.swordState === 'UNLOCKED' ? 10 : 0);
            } else {
                setWeight(Action.FIRE, pressureTargetCanIce || pressureTargetCanHoly ? 16 : 26);
                setWeight(Action.LIGHTNING, pressureTargetCanIce ? 7 : (pressureTargetCanHoly ? 12 : 20));
            }
            if (highestOpponentEnergy <= 1) setWeight(Action.FIRE, Math.max(weights[Action.FIRE] || 0, 22));
            if (enemySpellThreat) setWeight(Action.ICE_SWORD, Math.max(weights[Action.ICE_SWORD] || 0, 16));
        }
    }

    if (forcedPressureAction) {
        cpu.currentAction = forcedPressureAction;
        cpu.currentTarget = this.needsTarget(forcedPressureAction) ? paralyzedTarget : null;
        cpu.aiTargetIntent = null;
        cpu.aiTargetIntents = null;
        return;
    }

    let totalWeight = validActions.reduce((sum, action) => sum + (weights[action] || 0), 0);
    if (totalWeight <= 0) {
        validActions.forEach(action => { weights[action] = 1; });
        totalWeight = validActions.length;
    }

            let roll = this.aiRandom() * totalWeight;
    let selectedAction = validActions[0] || Action.CHARGE;
    for (const action of validActions) {
        roll -= weights[action] || 0;
        if (roll <= 0) {
            selectedAction = action;
            break;
        }
    }

    cpu.currentAction = selectedAction;
    cpu.currentTarget = this.pickFieldTarget(cpu, selectedAction, aliveOpponents, aliveAllies, pressureTarget, lowestEnergyTarget);
    cpu.aiTargetIntent = null;
    cpu.aiTargetIntents = null;
};

Game.prototype.pickFieldTarget = function(cpu, action, opponents, allies, pressureTarget, lowestEnergyTarget) {
    if (action === Action.MERCY_DEW) {
        return allies.slice().sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0] || cpu;
    }
    if ([Action.LIGHTNING, Action.CHARGE, Action.BARRIER, Action.SHIELD, Action.HOLY_SHIELD].includes(action)) return null;
    if (action === Action.STEAL) return lowestEnergyTarget || null;
    if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(action)) {
        return opponents.slice().sort((a, b) => b.energy - a.energy || a.hp - b.hp)[0] || null;
    }
    return pressureTarget || null;
};

Game.prototype.cpuDecisionFor = function(cpu, opponents, allies) {
    if (!cpu || cpu.hp <= 0) return;

    if (this.cpuDifficulty === 'easy') {
        this.cpuBeginnerDecision(cpu, opponents, allies);
        return;
    }

    this.cpuFieldDecision(cpu, opponents, allies);
};

Game.prototype.updateUI = function() {
    if (!this.isMultiplayerMode()) {
        const result = this.updateClassicDuelUI();
        this.updateMatchScoreUI();
        this.syncSwordControls(this.currentHumanActor());
        return result;
    }

    const setHTML = (element, value) => {
        if (element && element.innerHTML !== value) element.innerHTML = value;
    };
    const setText = (element, value) => {
        if (element && element.textContent !== value) element.textContent = value;
    };

    const renderHP = hp => hp <= 0
        ? '<span style="font-size:18px;">💀</span>'
        : '<span class="icon heart">❤️</span>'.repeat(hp);
    const renderEnergy = energy => energy <= 0
        ? '<span class="empty-text">空</span>'
        : '<div class="energy-circle"></div>'.repeat(energy);
    const renderBarrier = count => count > 0
        ? '<span class="icon active">🛡️</span>'.repeat(count)
        : '<span class="icon inactive">🛡️</span> <span class="empty-text">破碎</span>';
    const renderSword = (count, state) => {
        if (state === 'BROKEN' || count <= 0) {
            return '<span class="icon inactive">🗡️</span> <span class="empty-text">震碎</span>';
        }
        return '<span class="icon active">🗡️</span>'.repeat(count)
            + (state === 'UNLOCKED' ? '<span class="unlocked-text">[觉醒]</span>' : '');
    };
    const renderParalysis = paralyzed => paralyzed
        ? '<span class="icon paralyzed">⚡</span> <span class="para-text">麻痹中</span>'
        : '<span class="icon inactive">⚡</span>';
    const renderMetalPoints = player => player.role === 'METAL_WARRIOR'
        ? `<span class="metal-points">⚙ ${player.metalPoints || 0}/4</span>`
        : '';

    this.getPlayers().forEach(player => {
        const id = player.id.toLowerCase();
        const name = document.getElementById(`name-display-${id}`);
        if (!name) return;
        setText(name, `${this.playerLabel(player)} [${player.getRoleName()}]`);
        setHTML(document.getElementById(`hp-${id}`), renderHP(player.hp));
        setHTML(document.getElementById(`energy-${id}`), renderEnergy(player.energy));
        setHTML(document.getElementById(`barrier-${id}`), renderBarrier(player.barrierCount));
        setHTML(document.getElementById(`sword-${id}`), renderSword(player.swordCount, player.swordState));
        setHTML(document.getElementById(`metal-points-${id}`), renderMetalPoints(player));
        setHTML(document.getElementById(`paralysis-${id}`), renderParalysis(player.isParalyzed));
        const avatar = document.querySelector(`.avatar-${id}`);
        if (avatar) this.updateBattleAvatar(avatar, player, player.id === 'A' ? 'Player' : 'CPU', this.battleResult?.[player.id]);
        const lock = document.getElementById(`lock-status-${id}`);
        if (!lock) return;
        if (player.hp <= 0) lock.classList.add('hidden');
        else if (player.isParalyzed) { lock.innerText = '麻痹中'; lock.classList.remove('hidden'); }
        else if (player.currentAction) { lock.innerText = '已锁定'; lock.classList.remove('hidden'); }
        else if (player.id === 'A') { lock.innerText = '等待选择...'; lock.classList.toggle('hidden', player !== this.currentHumanActor()); }
        else { lock.innerText = '思考中...'; lock.classList.remove('hidden'); }
    });

    const log = document.getElementById('log-text');
    const logChanged = !!log && log.textContent !== this.roundLog;
    if (logChanged) log.textContent = this.roundLog;
    const logContainer = document.getElementById('log-container');
    if (logChanged && logContainer) logContainer.scrollTop = logContainer.scrollHeight;

    const actor = this.currentHumanActor();
    const steal = document.getElementById('steal-btn-a');
    const heal = document.getElementById('heal-btn-a');
    const metalStorm = document.getElementById('metal-storm-btn-a');
    if (steal) steal.style.display = actor?.role === 'ROGUE' ? 'inline-block' : 'none';
    if (heal) heal.style.display = actor?.role === 'PRIEST' ? 'inline-block' : 'none';
    if (metalStorm) metalStorm.style.display = actor?.role === 'METAL_WARRIOR' ? 'inline-block' : 'none';
    document.querySelectorAll('#control-panel button.action-btn').forEach(button => {
        const action = button.dataset.action;
        if (!action) return;
        const awakenedSword = action === Action.SWORD && actor?.swordState === 'UNLOCKED' && actor.swordCount > 0 && !actor.isParalyzed;
        button.disabled = !actor || !!actor.currentAction || !!this.battleResult || (!awakenedSword && !this.canUseAction(actor, action));
    });
    this.syncSwordControls(actor);
};

Game.prototype.resolveRound = function() {
    if (this.isSuddenDeathMode()) return this.resolveSuddenDeathRound();
    if (!this.isMultiplayerMode()) return this.resolveClassicDuelRound();
    this.resolveTeamRound();
};

Game.prototype.resolveSuddenDeathRound = function() {
    const pA = this.playerA;
    const pB = this.playerB;
    const actA = pA.currentAction;
    const actB = pB.currentAction;
    const isHoly = action => [Action.HOLY_SHIELD, Action.STEAL, Action.MERCY_DEW].includes(action);
    const isSword = action => [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(action);
    let log = `【突然死亡模式 回合结算】\n${pA.name} 选择了 [${this.getActionName(actA)}] ↔ CPU 选择了 [${this.getActionName(actB)}]\n`;
    let specialLog = '';
    const stolenCharge = new Set();

    [pA, pB].forEach(actor => {
        const target = actor === pA ? pB : pA;
        if (actor.currentAction === Action.STEAL) {
            actor.hasStolen = true;
            if (target.currentAction === Action.CHARGE) {
                stolenCharge.add(target.id);
                actor.energy += 1;
                specialLog += `${actor === pA ? pA.name : 'CPU'} 使用【神偷】，偷走了${target === pA ? pA.name : 'CPU'}正在凝聚的气。\n`;
            } else {
                specialLog += `${actor === pA ? pA.name : 'CPU'} 使用【神偷】，但目标没有集气，圣盾效果生效。\n`;
            }
        }
    });

    [pA, pB].forEach(actor => {
        const action = actor.currentAction;
        if (action === Action.CHARGE && !stolenCharge.has(actor.id)) actor.energy += 1;
        if (action === Action.SWORD) actor.energy -= 1;
        if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(action)) actor.energy -= 1;
        if (action === Action.FIRE) actor.energy -= 2;
        if (action === Action.METAL_STORM) actor.energy -= 1;
        if (action === Action.LIGHTNING) actor.energy -= 4;
        if (action === Action.HOLY_SHIELD && this.payHolyShieldCost(actor)) {
            specialLog += `${actor === pA ? pA.name : 'CPU'} 的【神圣庇护】生效，本局首次圣盾不消耗气。\n`;
        }
        if (action === Action.MERCY_DEW) {
            actor.energy -= 1;
            actor.hasHealed = true;
            if (actor.hp < actor.maxHp) {
                actor.hp += 1;
                specialLog += `${actor === pA ? pA.name : 'CPU'} 使用【慈露】，恢复1点生命并展开圣盾。\n`;
            } else {
                specialLog += `${actor === pA ? pA.name : 'CPU'} 使用【慈露】，圣盾效果生效。\n`;
            }
        }
        actor.energy = Math.max(0, actor.energy);
    });

    const calcAttack = (attacker, defender) => {
        const action = attacker.currentAction;
        const defense = defender.currentAction;
        let damage = 0;
        let paralyze = false;
        let text = '';
        if (isHoly(defense)) {
            if (action === Action.LIGHTNING) {
                damage = 1;
                text += `${attacker === pA ? pA.name : 'CPU'} 的【狂雷】击穿圣盾，造成1点余波伤害。\n`;
            } else if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.METAL_STORM].includes(action)) {
                text += `${defender === pA ? pA.name : 'CPU'} 的圣盾化解了【${this.getActionName(action)}】。\n`;
            }
        } else if (action === Action.ICE_SWORD) {
            if ([Action.FIRE, Action.LIGHTNING, Action.METAL_STORM].includes(defense)) {
                damage = 1;
                text += `${attacker === pA ? pA.name : 'CPU'} 的【冰刀】克制【${this.getActionName(defense)}】，造成1点伤害。\n`;
            } else if (defense === Action.CHARGE) {
                damage = 1;
            }
        } else if (action === Action.ELEC_SWORD) {
            if ([Action.FIRE, Action.LIGHTNING].includes(defense)) {
                paralyze = true;
                text += `${attacker === pA ? pA.name : 'CPU'} 的【电刀】扰乱【${this.getActionName(defense)}】，造成麻痹。\n`;
            } else if (defense === Action.CHARGE) {
                damage = 1;
            }
        } else if (action === Action.SWORD) {
            if (isSword(defense) || [Action.SHIELD, Action.BARRIER, Action.FIRE].includes(defense)) {
                text += `${attacker === pA ? pA.name : 'CPU'} 的【普通刀】被抵消或挡下。\n`;
            } else {
                damage = 1;
            }
        } else if (action === Action.FIRE) {
            if (defense === Action.FIRE) text += '双方火冲正面相撞，互相抵消。\n';
            else if ([Action.BARRIER, Action.ICE_SWORD, Action.ELEC_SWORD].includes(defense)) text += `【火冲】被【${this.getActionName(defense)}】克制或挡下。\n`;
            else damage = 2;
        } else if (action === Action.LIGHTNING) {
            if (defense === Action.LIGHTNING) text += '双方狂雷正面冲突，雷势互相抵消。\n';
            else if ([Action.CHARGE, Action.ICE_SWORD, Action.ELEC_SWORD].includes(defense)) text += `【狂雷】被【${this.getActionName(defense)}】避开或克制。\n`;
            else damage = 3;
        } else if (action === Action.METAL_STORM) {
            if ([Action.BARRIER, Action.SHIELD].includes(defense)) text += `【金属风暴】被【${this.getActionName(defense)}】完全抵挡。\n`;
            else if (defense === Action.ICE_SWORD) text += `【金属风暴】被【冰刀】破解。\n`;
            else damage = attacker.metalPoints;
        }
        return { damage, paralyze, text };
    };

    let resultA = calcAttack(pA, pB);
    let resultB = calcAttack(pB, pA);
    let equipLog = '';

    if (actA === Action.METAL_STORM) {
        const points = pA.metalPoints;
        pA.hasUsedMetalStorm = true;
        pA.metalPoints = 0;
        specialLog += `${pA.name} 释放【金属风暴】，消耗了 ${points} 层金属点数。\n`;
    }
    if (actB === Action.METAL_STORM) {
        const points = pB.metalPoints;
        pB.hasUsedMetalStorm = true;
        pB.metalPoints = 0;
        specialLog += `CPU 释放【金属风暴】，消耗了 ${points} 层金属点数。\n`;
    }

    if (actA === Action.SWORD && actB === Action.SHIELD) {
        pA.swordCount -= 1;
        if (pA.swordCount <= 0) { pA.swordState = 'BROKEN'; pA.specialSwordCharges = 0; }
        if (pA.role === 'METAL_WARRIOR') { pA.barrierCount += 1; this.addMetalPoint(pA); }
        equipLog += `CPU 的盾牌震碎了${pA.name}的普通刀。\n`;
    }
    if (actB === Action.SWORD && actA === Action.SHIELD) {
        pB.swordCount -= 1;
        if (pB.swordCount <= 0) { pB.swordState = 'BROKEN'; pB.specialSwordCharges = 0; }
        if (pB.role === 'METAL_WARRIOR') { pB.barrierCount += 1; this.addMetalPoint(pB); }
        equipLog += `${pA.name} 的盾牌震碎了CPU的普通刀。\n`;
    }
    if (actA === Action.SWORD && actB === Action.HOLY_SHIELD && pB.role === 'PALADIN' && !pB.hasBrokenSword) {
        pB.hasBrokenSword = true;
        pA.swordCount -= 1;
        if (pA.swordCount <= 0) { pA.swordState = 'BROKEN'; pA.specialSwordCharges = 0; }
        if (pA.role === 'METAL_WARRIOR') { pA.barrierCount += 1; this.addMetalPoint(pA); }
        equipLog += `CPU 的第一次圣骑士圣盾震碎了${pA.name}的普通刀。\n`;
    }
    if (actB === Action.SWORD && actA === Action.HOLY_SHIELD && pA.role === 'PALADIN' && !pA.hasBrokenSword) {
        pA.hasBrokenSword = true;
        pB.swordCount -= 1;
        if (pB.swordCount <= 0) { pB.swordState = 'BROKEN'; pB.specialSwordCharges = 0; }
        if (pB.role === 'METAL_WARRIOR') { pB.barrierCount += 1; this.addMetalPoint(pB); }
        equipLog += `${pA.name} 的第一次圣骑士圣盾震碎了CPU的普通刀。\n`;
    }
    if (isSword(actA) && actB === Action.BARRIER) {
        pB.barrierCount -= 1;
        this.playBarrierBrokenEffect(pB);
        if (pB.role === 'METAL_WARRIOR') {
            pB.swordCount += 1;
            if (pB.swordState === 'BROKEN') pB.swordState = 'NORMAL';
            this.addMetalPoint(pB);
        }
        equipLog += `${pA.name} 击碎了CPU的1层屏障。\n`;
    }
    if (isSword(actB) && actA === Action.BARRIER) {
        pA.barrierCount -= 1;
        this.playBarrierBrokenEffect(pA);
        if (pA.role === 'METAL_WARRIOR') {
            pA.swordCount += 1;
            if (pA.swordState === 'BROKEN') pA.swordState = 'NORMAL';
            this.addMetalPoint(pA);
        }
        equipLog += `CPU 击碎了${pA.name}的1层屏障。\n`;
    }

    log += specialLog + resultA.text + resultB.text;
    if (resultA.damage > resultB.damage) {
        pB.hp -= resultA.damage;
        log += `${pA.name} 命中CPU，造成 ${resultA.damage} 点伤害。\n`;
    } else if (resultB.damage > resultA.damage) {
        pA.hp -= resultB.damage;
        log += `CPU 命中${pA.name}，造成 ${resultB.damage} 点伤害。\n`;
    } else if (resultA.damage > 0) {
        log += `双方威力相等，各 ${resultA.damage} 点伤害互相抵消。\n`;
    }

    log += equipLog;
    if (resultA.paralyze && pB.hp > 0) { pB.nextTurnParalyze = true; log += 'CPU 陷入麻痹状态。\n'; }
    if (resultB.paralyze && pA.hp > 0) { pA.nextTurnParalyze = true; log += `${pA.name} 陷入麻痹状态。\n`; }

    [pA, pB].forEach(player => {
        const action = player.currentAction;
        if (action === Action.SWORD && player.swordState === 'NORMAL' && player.swordCount > 0) {
            player.swordState = 'UNLOCKED';
            player.specialSwordCharges = player.role === 'WARRIOR' ? 2 : 1;
        } else if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(action) && player.swordCount > 0) {
            player.specialSwordCharges = Math.max(0, (player.specialSwordCharges || 1) - 1);
            if (player.specialSwordCharges <= 0) {
                player.swordState = 'NORMAL';
                log += `${player === pA ? pA.name : 'CPU'} 的特殊刀能量耗尽，变回普通刀。\n`;
            }
        }
    });

    this.finishClassicDuelRound(log);
};

Game.prototype.resolveTeamRound = function() {
    const allActors = (this.gameMode === 'ffa'
        ? this.getPlayers()
        : [...this.humanTeam(), ...this.cpuTeam()]
    ).filter(player => player.hp > 0);
    let log = this.gameMode === 'ffa' ? `【四人乱斗 回合结算】\n` : `【2v2 回合结算】\n`;
    allActors.forEach(player => {
        const targetText = player.currentTarget ? ` -> ${this.playerLabel(player.currentTarget)}` : '';
        log += `${this.playerLabel(player)} 选择了 [${this.getActionName(player.currentAction)}]${targetText}\n`;
    });

    const stolenCharge = new Set();
    allActors.forEach(actor => {
        if (actor.currentAction === Action.STEAL) {
            actor.hasStolen = true;
            const target = actor.currentTarget;
            if (target?.currentAction === Action.CHARGE && !stolenCharge.has(target.id)) {
                stolenCharge.add(target.id);
                actor.energy += 1;
                log += `🕶 ${this.playerLabel(actor)} 使用【神偷】，偷走了 ${this.playerLabel(target)} 正在凝聚的气。\n`;
            } else if (target?.currentAction === Action.CHARGE) {
                log += `🕶 ${this.playerLabel(actor)} 使用【神偷】，但这股真气已被其他人抢先偷走。\n`;
            } else {
                log += `🕶 ${this.playerLabel(actor)} 使用【神偷】，但目标没有集气。\n`;
            }
        }
    });

    allActors.forEach(actor => {
        const action = actor.currentAction;
        if (action === Action.CHARGE && !stolenCharge.has(actor.id)) actor.energy += 1;
        if (action === Action.HOLY_SHIELD && this.payHolyShieldCost(actor)) {
            log += `✨ ${this.playerLabel(actor)} 的【神圣庇护】生效，本局首次圣盾不消耗气。\n`;
        }
        if (action === Action.MERCY_DEW) {
            actor.energy -= 1;
            actor.hasHealed = true;
            const target = actor.currentTarget || actor;
            if (target.hp < target.maxHp) {
                target.hp += 1;
                log += `💧 ${this.playerLabel(actor)} 对 ${this.playerLabel(target)} 使用【慈露】，恢复 1 点生命并展开圣盾。\n`;
            } else {
                log += `💧 ${this.playerLabel(actor)} 使用【慈露】，圣盾生效，但目标生命已满。\n`;
            }
        }
    });

    const rangeHitTargets = new Set();
    const executedAttackers = new Set();
    const spendAttackEnergy = (actor, action) => {
        if (action === Action.FIRE) actor.energy -= 2;
        if (action === Action.METAL_STORM) actor.energy -= 1;
        if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(action)) actor.energy -= 1;
        if (action === Action.LIGHTNING) actor.energy -= 4;
        actor.energy = Math.max(0, actor.energy);
    };

    // 1. 定义技能出手优先级（数字越大，出手越快）
    const getActionPriority = (action) => {
        if (action === Action.LIGHTNING) return 3;
        if (action === Action.FIRE) return 2;
        if (action === Action.METAL_STORM) return 2;
        if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(action)) return 1;
        return 0; // 其他非攻击技能
    };

    // 2. 筛选出所有发动攻击的角色，并按优先级降序排列
    const attackingActors = allActors.filter(actor =>
        [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.LIGHTNING, Action.METAL_STORM].includes(actor.currentAction)
    ).sort((a, b) => getActionPriority(b.currentAction) - getActionPriority(a.currentAction));

    // 3. 按优先级依次结算攻击
    attackingActors.forEach(actor => {
        // 【核心裁定】：如果该角色在出手前，已经被更高优先级的技能击杀，则直接打断其攻击！
        if (actor.hp <= 0) {
            log += `💀 ${this.playerLabel(actor)} 在出手前已被击倒，【${this.getActionName(actor.currentAction)}】被打断！\n`;
            return;
        }

        const action = actor.currentAction;
        if (action === Action.METAL_STORM) {
            actor.metalStormPower = actor.metalPoints;
            actor.hasUsedMetalStorm = true;
            actor.metalPoints = 0;
            log += `⚙️ ${this.playerLabel(actor)} 释放【金属风暴】，消耗了 ${actor.metalStormPower} 层金属点数。\n`;
        }
        spendAttackEnergy(actor, action);
        executedAttackers.add(actor.id);
        const isRangeAction = [Action.LIGHTNING, Action.FIRE].includes(action);
        
        // 动态获取当前依然存活的目标（防止鞭尸）
        const targets = isRangeAction
            ? this.alive(this.opponentsOf(actor))
            : [actor.currentTarget].filter(t => t && t.hp > 0);

        targets.forEach(target => {
            if (isRangeAction && rangeHitTargets.has(target.id)) {
                log += `🌊 ${this.playerLabel(target)} 本回合已承受过范围技能伤害，${this.playerLabel(actor)} 的【${this.getActionName(action)}】不再重复造成伤害。\n`;
                return;
            }
            const beforeHp = target.hp;
            log += this.applyTeamAttack(actor, target, action);
            
            // 记录范围伤害命中情况
            if (isRangeAction && target.hp < beforeHp) rangeHitTargets.add(target.id);
        });
    });

    allActors.forEach(actor => {
        const action = actor.currentAction;
        if (!executedAttackers.has(actor.id)) return;
        if (action === Action.SWORD && actor.swordState === 'NORMAL') {
            actor.swordState = 'UNLOCKED';
            actor.specialSwordCharges = actor.role === 'WARRIOR' ? 2 : 1;
        }
        else if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(action) && actor.swordCount > 0) {
            actor.specialSwordCharges = Math.max(0, (actor.specialSwordCharges || 1) - 1);
            if (actor.specialSwordCharges <= 0) {
                actor.swordState = 'NORMAL';
                log += `🔧 ${this.playerLabel(actor)} 的特武能量耗尽，变回普通刀。\n`;
            }
        }
    });

    this.finishTeamRound(log);
};

Game.prototype.applyTeamAttack = function(actor, target, action) {
    if (!target || target.hp <= 0) return '';
    const defense = target.currentAction;
    const holyDefense = [Action.HOLY_SHIELD, Action.STEAL, Action.MERCY_DEW].includes(defense);
    const hasActiveBarrier = defense === Action.BARRIER && target.barrierCount > 0;
    let damage = 0;
    let log = '';

    if (holyDefense) {
        damage = action === Action.LIGHTNING ? 1 : 0;
        // 加入 && !target.hasBrokenSword 判定
        if (target.role === 'PALADIN' && defense === Action.HOLY_SHIELD && action === Action.SWORD && !target.hasBrokenSword) {
            target.hasBrokenSword = true; // 消耗特权
            actor.swordCount -= 1;
            if (actor.swordCount <= 0) { actor.swordState = 'BROKEN'; actor.specialSwordCharges = 0; }
            if (actor.role === 'METAL_WARRIOR') {
                actor.barrierCount += 1;
                this.addMetalPoint(actor);
            }
            return `🛡✨ ${this.playerLabel(target)} 的圣骑士圣盾震碎了 ${this.playerLabel(actor)} 的普通刀（碎刀特权已消耗）！\n`;
        }
        log += damage > 0
            ? `⚡ ${this.playerLabel(actor)} 的【狂雷】击穿圣盾，对 ${this.playerLabel(target)} 造成 1 点余波伤害。\n`
            : `🛡 ${this.playerLabel(target)} 的圣盾化解了 ${this.playerLabel(actor)} 的【${this.getActionName(action)}】。\n`;
    } else if (action === Action.LIGHTNING) {
        if (defense === Action.LIGHTNING) {
            log += `⚡ ${this.playerLabel(actor)} 与 ${this.playerLabel(target)} 的狂雷正面冲突，雷势互相抵消。\n`;
        } else if (defense === Action.CHARGE || defense === Action.ICE_SWORD) {
            log += `⚡ ${this.playerLabel(actor)} 的【狂雷】被 ${this.playerLabel(target)} 避开或打断。\n`;
        } else {
            damage = 3;
        }
    } else if (action === Action.FIRE) {
        if (defense === Action.FIRE) {
            log += `🔥 ${this.playerLabel(actor)} 与 ${this.playerLabel(target)} 的火冲正面相撞，火势互相抵消。\n`;
        } else if (defense === Action.LIGHTNING) {
            log += `⚡ ${this.playerLabel(target)} 的狂雷压过了 ${this.playerLabel(actor)} 的火冲。\n`;
        } else if (hasActiveBarrier) {
            log += `🛡 ${this.playerLabel(target)} 的屏障挡下了火冲。\n`;
        } else if (defense !== Action.ICE_SWORD) {
            damage = 2;
        }
    } else if (action === Action.METAL_STORM) {
        if (hasActiveBarrier || defense === Action.SHIELD) {
            log += `🛡 ${this.playerLabel(target)} 的【${this.getActionName(defense)}】完全抵挡了 ${this.playerLabel(actor)} 的【金属风暴】。\n`;
        } else if (defense === Action.ICE_SWORD) {
            log += `❄ ${this.playerLabel(target)} 的冰刀破解了 ${this.playerLabel(actor)} 的【金属风暴】。\n`;
        } else {
            damage = actor.metalStormPower ?? actor.metalPoints;
        }
    } else if (action === Action.SWORD) {
        if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(defense)) {
            log += `⚔ ${this.playerLabel(actor)} 与 ${this.playerLabel(target)} 的刀势互相碰撞，未造成伤害。\n`;
            return log;
        }
        if (defense === Action.FIRE) {
            log += `🔥 ${this.playerLabel(target)} 的火冲压制了 ${this.playerLabel(actor)} 的普通刀。\n`;
            return log;
        }
        if (defense === Action.LIGHTNING) {
            log += `⚡ ${this.playerLabel(target)} 的狂雷压制了 ${this.playerLabel(actor)} 的普通刀。\n`;
            return log;
        }
        if (defense === Action.SHIELD && action === Action.SWORD) {
            actor.swordCount -= 1;
            if (actor.swordCount <= 0) { actor.swordState = 'BROKEN'; actor.specialSwordCharges = 0; }
            if (actor.role === 'METAL_WARRIOR') {
                actor.barrierCount += 1;
                this.addMetalPoint(actor);
            }
            log += `🛡 ${this.playerLabel(target)} 的盾牌震碎了 ${this.playerLabel(actor)} 的普通刀。\n`;
            return log;
        }
        if (hasActiveBarrier) {
            target.barrierCount = Math.max(0, target.barrierCount - 1);
            this.playBarrierBrokenEffect(target);
            if (target.role === 'METAL_WARRIOR') {
                target.swordCount += 1;
                if (target.swordState === 'BROKEN') target.swordState = 'NORMAL';
                this.addMetalPoint(target);
            }
            log += `💥 ${this.playerLabel(actor)} 击碎了 ${this.playerLabel(target)} 的 1 层屏障。\n`;
            return log;
        }
        if (defense !== Action.SHIELD && defense !== Action.ELEC_SWORD) {
            damage = 1;
        }
    } else if (action === Action.ICE_SWORD) {
        if ([Action.FIRE, Action.LIGHTNING, Action.METAL_STORM].includes(defense)) {
            damage = 1;
            log += `❄ ${this.playerLabel(actor)} 的冰刀破解了 ${this.playerLabel(target)} 的【${this.getActionName(defense)}】。\n`;
        } else if (defense === Action.CHARGE) {
            damage = 1;
        } else if (hasActiveBarrier) {
            target.barrierCount = Math.max(0, target.barrierCount - 1);
            this.playBarrierBrokenEffect(target);
            if (target.role === 'METAL_WARRIOR') {
                target.swordCount += 1;
                if (target.swordState === 'BROKEN') target.swordState = 'NORMAL';
                this.addMetalPoint(target);
            }
            log += `💥 ${this.playerLabel(actor)} 的冰刀击碎了 ${this.playerLabel(target)} 的 1 层屏障。\n`;
            return log;
        }
    } else if (action === Action.ELEC_SWORD) {
        if (defense === Action.SWORD) {
            target.nextTurnParalyze = true;
            log += `⚡ ${this.playerLabel(actor)} 的电刀压制了 ${this.playerLabel(target)} 的普通刀，并造成麻痹。\n`;
        } else if (defense === Action.CHARGE) {
            damage = 1;
        } else if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(defense)) {
            target.nextTurnParalyze = true;
            log += `⚡ ${this.playerLabel(actor)} 的电刀干扰了 ${this.playerLabel(target)} 的【${this.getActionName(defense)}】，造成麻痹。\n`;
        } else if (hasActiveBarrier) {
            target.barrierCount = Math.max(0, target.barrierCount - 1);
            this.playBarrierBrokenEffect(target);
            if (target.role === 'METAL_WARRIOR') {
                target.swordCount += 1;
                if (target.swordState === 'BROKEN') target.swordState = 'NORMAL';
                this.addMetalPoint(target);
            }
            log += `💥⚡ ${this.playerLabel(actor)} 的电刀击碎了 ${this.playerLabel(target)} 的 1 层屏障，麻痹电流被屏障吸收。\n`;
            return log;
        }
    }

    if (damage > 0) {
        target.hp -= damage;
        log += `💥 ${this.playerLabel(actor)} 的【${this.getActionName(action)}】命中 ${this.playerLabel(target)}，造成 ${damage} 点伤害。\n`;
    } else if (!log) {
        log += `⚔ ${this.playerLabel(actor)} 的【${this.getActionName(action)}】未造成有效伤害。\n`;
    }
    return log;
};

Game.prototype.finishTeamRound = function(log) {
    const resolvedPlayers = this.getPlayers();
    this.updateAiStallState(resolvedPlayers);
    this.rememberResolvedActions(resolvedPlayers);
    resolvedPlayers.forEach(player => {
        player.aiRound = (player.aiRound || 0) + 1;
        player.isParalyzed = false;
        if (player.nextTurnParalyze) {
            player.isParalyzed = true;
            player.nextTurnParalyze = false;
        }
        player.currentAction = null;
        player.currentTarget = null;
        player.metalStormPower = null;
    });
    this.pendingHumanIndex = 0;
    this.battleResult = null;

    if (this.gameMode === 'ffa') {
        const alivePlayers = this.alive(this.getPlayers());
        if (alivePlayers.length === 0) {
            this.battleResult = { A: 'defeat', B: 'defeat', C: 'defeat', D: 'defeat' };
            log += '\n💀 【平局】四人乱斗无人幸存！';
            this.showEndActions();
        } else if (alivePlayers.length === 1) {
            const winner = alivePlayers[0];
            this.battleResult = {};
            this.getPlayers().forEach(player => { this.battleResult[player.id] = player === winner ? 'victory' : 'defeat'; });
            log += `\n🏆 【游戏结束】${this.playerLabel(winner)} 成为四人乱斗最后的胜者！`;
            this.showEndActions();
        }
        this.roundLog = log;
        this.updateUI();
        if (!this.battleResult) this.continueCpuOnlyRound();
        return;
    }

    const humansAlive = this.alive(this.humanTeam()).length > 0;
    const cpusAlive = this.alive(this.cpuTeam()).length > 0;
    if (!humansAlive && !cpusAlive) {
        this.battleResult = { A: 'defeat', C: 'defeat', B: 'defeat', D: 'defeat' };
        log += '\n💀 【平局】双方队伍同归于尽！';
        this.showEndActions();
    } else if (!humansAlive) {
        this.battleResult = { A: 'defeat', C: 'defeat', B: 'victory', D: 'victory' };
        log += '\n🏆 【游戏结束】CPU 队伍获得胜利！';
        this.showEndActions();
    } else if (!cpusAlive) {
        this.battleResult = { A: 'victory', C: 'victory', B: 'defeat', D: 'defeat' };
        log += `\n🏆 【游戏结束】${this.playerA.name} 的队伍获得胜利！`;
        this.showEndActions();
    }
    this.roundLog = log;
    this.updateUI();
    if (!this.battleResult) this.continueCpuOnlyRound();
};

// 绑定故事界面的交互事件及启动游戏
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgressBar = document.getElementById('loading-progress-bar');
    const collectInitialAssetUrls = () => {
        const urls = new Set();
        const addUrl = rawUrl => {
            if (!rawUrl || rawUrl.startsWith('data:') || rawUrl.startsWith('blob:')) return;
            urls.add(new URL(rawUrl, window.location.href).href);
        };

        // Block only on assets required by the loading layer and the real lobby.
        // Story, tutorial and battle assets remain lazy and load when opened.
        document.querySelectorAll('#loading-screen img[src], #main-menu-screen img[src]')
            .forEach(img => addUrl(img.getAttribute('src')));
        let savedRole = 'WARRIOR';
        try {
            savedRole = localStorage.getItem('qizong.lastRole') || savedRole;
        } catch (error) {
            // Storage can be unavailable in strict privacy modes.
        }
        const lobbySprites = {
            PRIEST: 'priest_com-idle.webp', WARRIOR: 'warrior_com-idle.webp',
            PALADIN: 'knight_com-idle.webp', ROGUE: 'burglar_com-idle.webp',
            BARBARIAN: 'barbarian_com-idle.webp', METAL_WARRIOR: 'metal_com-idle.webp'
        };
        addUrl('icon.webp');
        addUrl('assets/images/main_screen.webp');
        if (roleProfiles[savedRole]) addUrl(roleProfiles[savedRole].image);
        if (lobbySprites[savedRole]) addUrl(`assets/images/com_image/${lobbySprites[savedRole]}`);

        return [...urls];
    };

    const preloadImage = url => new Promise(resolve => {
        const image = new Image();
        let settled = false;
        const finish = ok => {
            if (settled) return;
            settled = true;
            clearTimeout(timeout);
            resolve({ url, ok });
        };
        const timeout = setTimeout(() => finish(false), 8000);
        image.fetchPriority = 'high';
        image.decoding = 'async';
        image.onload = () => finish(true);
        image.onerror = () => finish(false);
        image.src = url;
    });

    const loadingReady = (async () => {
        if (!loadingScreen || !loadingProgressBar) {
            return [];
        }
        const urls = collectInitialAssetUrls();
        const total = urls.length;
        let completed = 0;
        const updateProgress = () => {
            const percent = total ? Math.round((completed / total) * 100) : 100;
            loadingProgressBar.style.width = `${percent}%`;
            loadingProgressBar.setAttribute('aria-valuenow', String(percent));
        };

        updateProgress();
        const results = await Promise.all(urls.map(url => preloadImage(url).then(result => {
            completed += 1;
            updateProgress();
            return result;
        })));
        loadingProgressBar.style.width = '100%';
        await new Promise(resolve => setTimeout(resolve, 120));
        loadingScreen.classList.add('hidden');
        loadingScreen.style.display = 'none';
        return results;
    })();

    const updateModal = document.getElementById('update-modal');
    const updateCloseBtn = document.getElementById('update-close-btn');
    if (updateCloseBtn && updateModal) {
        updateCloseBtn.onclick = () => {
            updateModal.classList.add('hidden');
            updateModal.style.display = 'none';
            updateModal.setAttribute('aria-hidden', 'true');
        };
    }

    
    // ================= 故事背景事件 =================
    const storyScreen = document.getElementById('story-screen');
    const skipBtn = document.getElementById('skip-story-btn');
    const factionModal = document.getElementById('faction-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const factionTitle = document.getElementById('faction-title');
    const factionDesc = document.getElementById('faction-desc');
    
    if(skipBtn) skipBtn.onclick = () => { storyScreen.style.display = 'none'; };
    if(closeModalBtn) {
        closeModalBtn.onclick = () => { factionModal.classList.add('hidden'); factionModal.style.display = 'none'; };
    }

    document.querySelectorAll('.map-hotspot').forEach(hotspot => {
        hotspot.onclick = (event) => {
            const factionId = event.currentTarget.dataset.faction;
            const lore = factionLore[factionId];
            if (!lore) return;
            factionTitle.innerText = lore.name;
            factionDesc.innerText = lore.desc;
            factionModal.classList.remove('hidden');
            factionModal.style.display = 'flex';
        };
    });

    const tutModal = document.getElementById('tutorial-modal');
    const showTutBtn = document.getElementById('show-tutorial-btn');
    const showCareerBtn = document.getElementById('show-career-btn');
    const tutCloseBtn = document.getElementById('tut-close-btn');
    const tutNextBtn = document.getElementById('tut-next-btn');
    const tutPrevBtn = document.getElementById('tut-prev-btn');
    const tutAnimBox = document.getElementById('tutorial-animation-box');
    const tutText = document.getElementById('tutorial-text');
    const tutCounter = document.getElementById('tut-step-counter');

    let currentTutStep = 0;

    const tutSteps = [
        { text: "欢迎来到十字星大赛。每个回合，双方都会同时选择一个招式，胜负往往藏在你对下一步的判断里。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card anim-clash-l"><strong>你</strong>出招</div><div style="color:#ffcc00; font-weight:bold;">VS</div><div class="tut-skill-card anim-clash-r"><strong>敌</strong>出招</div></div><div class="tut-demo-character"><div class="tut-sprite idle"></div></div></div>` },
        { text: "先看基础：红心是生命值，气是释放强力招式的资源。现在所有职业开局都有更多生命和气，节奏会更主动。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card"><strong>❤</strong>生命</div><div class="tut-skill-card"><strong>●</strong>气</div></div><div class="tut-demo-character"><div class="tut-sprite idle"></div></div></div>` },
        { text: "集气可以增加一点气。它不是攻击，但能规避狂雷，也是准备火冲、圣盾和元素刀的重要手段。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card anim-block"><strong>+1</strong>集气</div><div class="tut-skill-card"><strong>●</strong>积攒资源</div></div><div class="tut-demo-character"><div class="tut-sprite charge"></div></div></div>` },
        { text: "火冲消耗两点气，造成两点伤害；狂雷消耗四点气，造成三点伤害。火冲更适合抓破绽，狂雷适合逼迫对手防守。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card anim-slide-r"><strong>🔥</strong>2气 / 2伤</div><div class="tut-skill-card anim-strike"><strong>⚡</strong>4气 / 3伤</div></div><div class="tut-demo-character"><div class="tut-sprite attack"></div></div></div>` },
        { text: "屏障能抵挡火冲，集气能避开狂雷。盾牌主要用来防刀，但不会击碎冰刀和电刀。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card anim-clash-l"><strong>🔥</strong>火冲</div><div class="tut-skill-card anim-block"><strong>🛡</strong>屏障</div><div class="tut-skill-card anim-strike"><strong>⚡</strong>狂雷</div><div class="tut-skill-card"><strong>●</strong>集气</div></div><div class="tut-demo-character"><div class="tut-sprite shield"></div></div></div>` },
        { text: "普通刀不耗气。使用普通刀后会进入觉醒状态；觉醒状态下不能再普通刀，下一次出刀必须选择冰刀或电刀。中途可以先用非刀技能。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card"><strong>🗡</strong>普通刀</div><span style="color:#aaa;">➜</span><div class="tut-skill-card"><strong>❄</strong>冰刀</div><div class="tut-skill-card"><strong>⚡</strong>电刀</div></div><div class="tut-demo-character"><div class="tut-sprite attack"></div></div></div>` },
        { text: "冰刀和电刀都消耗一点气。冰刀克制火冲和狂雷，造成一点伤害；冰刀和电刀命中集气都会造成一点伤害。电刀会麻痹普通刀、冰刀和电刀，但不再麻痹屏障。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card anim-block"><strong>❄</strong>破火冲/狂雷</div><div class="tut-skill-card anim-block"><strong>⚡</strong>麻痹刀类</div><div class="tut-skill-card"><strong>1</strong>消耗气</div></div><div class="tut-demo-character"><div class="tut-sprite attack"></div></div></div>` },
        { text: "圣盾消耗一点气，能挡刀和火冲；圣骑士本局第一次圣盾免费且可碎普通刀。牧师的慈露、盗贼的神偷也会视作自身使用圣盾。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card"><strong>✨</strong>圣盾</div><div class="tut-skill-card"><strong>💧</strong>慈露</div><div class="tut-skill-card"><strong>🕵</strong>神偷</div></div><div class="tut-demo-character"><div class="tut-sprite shield"></div></div></div>` },
        { text: "金属武者的刀或屏障被击碎时会累积金属点数，最多4层。每局可消耗1气对单体释放一次金属风暴，造成等同点数的伤害并清空点数；冰刀、屏障、盾牌与圣盾都能完全抵挡它。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card"><strong>⚙</strong>金属点数</div><div class="tut-skill-card anim-strike"><strong>⚙</strong>金属风暴</div><div class="tut-skill-card anim-block"><strong>🛡</strong>多种反制</div></div><div class="tut-demo-character"><div class="tut-sprite attack"></div></div></div>` }
    ];

    function updateTutStep() {
        tutCounter.innerText = `${currentTutStep + 1} / ${tutSteps.length}`;
        tutText.innerText = tutSteps[currentTutStep].text;
        tutAnimBox.innerHTML = tutSteps[currentTutStep].anim;
        
        tutPrevBtn.disabled = (currentTutStep === 0);
        tutPrevBtn.style.opacity = (currentTutStep === 0) ? '0.5' : '1';
        
        if (currentTutStep === tutSteps.length - 1) {
            tutNextBtn.innerText = "开始游戏";
            tutNextBtn.style.backgroundColor = "#ffcc00";
            tutNextBtn.style.color = "#000";
        } else {
            tutNextBtn.innerText = "下一步";
            tutNextBtn.style.backgroundColor = "#4CAF50";
            tutNextBtn.style.color = "#fff";
        }
    }

    const openTutorial = () => {
        currentTutStep = 0;
        updateTutStep();
        tutModal.classList.remove('hidden');
        tutModal.style.display = 'flex';
    };
    if (showTutBtn) showTutBtn.onclick = openTutorial;
    document.addEventListener('open-tutorial', openTutorial);
    if (showCareerBtn) {
        showCareerBtn.onclick = () => {
            const game = window.gameInstance;
            if (!game) return;
            game.renderCareerScreen();
            game.setOverlay('career-screen');
        };
    }
    if (tutCloseBtn) tutCloseBtn.onclick = () => { tutModal.style.display = 'none'; };
    if (tutNextBtn) {
        tutNextBtn.onclick = () => {
            if (currentTutStep < tutSteps.length - 1) {
                currentTutStep += 1;
                updateTutStep();
            } else {
                tutModal.style.display = 'none';
                document.getElementById('skip-story-btn')?.click();
            }
        };
    }
    if (tutPrevBtn) {
        tutPrevBtn.onclick = () => {
            if (currentTutStep > 0) {
                currentTutStep -= 1;
                updateTutStep();
            }
        };
    }

    loadingReady.finally(() => {
        try {
            window.gameInstance = new Game();
            window.gameInstance.setOverlay('main-menu-screen');
            window.gameInstance.showUpdateNotice();
        } finally {
            // Reveal the app only after the real main screen is ready.
            document.documentElement.classList.remove('app-loading');
        }
    });
});
