// 招式 Action 枚举定义
const Action = {
    CHARGE: 'CHARGE', SWORD: 'SWORD', ICE_SWORD: 'ICE_SWORD', ELEC_SWORD: 'ELEC_SWORD',
    FIRE: 'FIRE', BARRIER: 'BARRIER', SHIELD: 'SHIELD', LIGHTNING: 'LIGHTNING',
    HOLY_SHIELD: 'HOLY_SHIELD', STEAL: 'STEAL', MERCY_DEW: 'MERCY_DEW'
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
        skill: '额外拥有一层屏障,第一次使用的圣盾抵挡普通刀时，会将其震碎。'
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
        skill: '额外增加一点生命值，开局拥有与其他职业相同的气，但无法使用圣盾。'
    },
    METAL_WARRIOR: {
        name: '金属武者',
        faction: '禅摩达克部落联盟',
        factionKey: 'chanmadak',
        image: 'assets/images/metal com.webp',
        skillName: '刀盾互生',
        description: '来自禅摩达克一些部落的僧侣，能够熟练掌控金属与粒子武器。在刀或屏障被击碎后，他们会将碎片转化为另一种形态继续战斗，以达到攻防平衡。至于为什么不用碎刀再造一把新刀，可能是他们真的很喜欢平衡。',
        skill: '刀被击碎后增加一层屏障；屏障被击碎后增加一把刀。'
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
        this.hasBrokenSword = false; // 新增：记录圣骑士是否已消耗碎刀特权
        this.specialSwordCharges = 0;
        
        // 职业特性重载 (牧师、金属武者初始属性默认: 2血 1气 1刀 1盾)
        if (this.role === 'BARBARIAN') { this.hp = 5; this.energy = 2; } // 👈 这里将 4 改为 5
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
            case Action.HOLY_SHIELD: return this.role !== 'BARBARIAN' && this.energy >= 1; 
            case Action.STEAL: return this.role === 'ROGUE' && !this.hasStolen; 
            case Action.MERCY_DEW: return this.role === 'PRIEST' && !this.hasHealed && this.energy >= 1; 
            default: return false;
        }
    }
}

// 网页游戏控制器
class Game {
    constructor() {
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
        this.initGame();
    }

    initGame() {
        const loginScreen = document.getElementById('login-screen');
        const startBtn = document.getElementById('start-game-btn');
        const usernameInput = document.getElementById('username-input');
        const roleASelect = document.getElementById('role-a');
        const roleBSelect = document.getElementById('role-b');

        this.initRoleSelection(roleASelect, roleBSelect);

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
            this.startGame();
        };
    }

    initRoleSelection(roleAInput, roleBInput) {
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
                    <img class="role-card-image" src="${profile.image}" alt="${profile.name}">
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

    startGame() {
        this.bindActionEvents();
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

    bindActionEvents() {
        const container = document.getElementById('actions-a');
        const subContainer = document.getElementById('sub-actions-a');
        
        container.onclick = (e) => {
            const action = e.target.dataset.action;
            if (action === 'SWORD' && this.playerA.swordState === 'UNLOCKED' && !this.playerA.isParalyzed) {
                subContainer.classList.remove('hidden');
                return;
            }
            if (!action || !this.playerA.canUse(action)) return;
            this.lockAction(action, subContainer);
        };

        subContainer.onclick = (e) => {
            const action = e.target.dataset.action;
            if (!action || !this.playerA.canUse(action)) return;
            this.lockAction(action, subContainer);
        };
    }

    lockAction(action, subContainer) {
        this.playerA.currentAction = action;
        subContainer.classList.add('hidden');
        this.updateUI(); 
        
        // 延迟模拟思考
        setTimeout(() => {
            this.cpuDecision();
            if (['PRIEST', 'WARRIOR', 'ROGUE', 'METAL_WARRIOR', 'BARBARIAN', 'PALADIN'].includes(this.playerB.role)) {
                this.updateUI();
                setTimeout(() => this.resolveRound(), 500);
            } else {
                this.resolveRound();
            }
        }, 400);
    }

    cpuDecision() {
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
        const attackActions = [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.LIGHTNING];
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
            avatar.textContent = fallback;
            return;
        }

        const state = result || (player.hp <= 0 ? 'defeat' : this.getCharacterAnimationState(player.role, player.currentAction));
        avatar.textContent = '';
        avatar.classList.remove(...spriteClasses);
        avatar.classList.add(`${spriteRole}-sprite`);
        avatar.setAttribute('aria-label', `${player.name} ${player.getRoleName()}`);

        if (avatar.dataset.spriteState !== state) {
            void avatar.offsetWidth;
            avatar.dataset.spriteState = state;
        }
        avatar.classList.add(`${spriteRole}-${state}`);
    }

    updateUI() {
        const pA = this.playerA; const pB = this.playerB;
        document.getElementById('name-display-a').innerText = `${pA.name} [${pA.getRoleName()}]`;
        document.getElementById('name-display-b').innerText = `🤖 CPU [${pB.getRoleName()}]`;
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
        const renderParalysis = (isPara) => isPara ? `<span class="icon paralyzed">⚡</span> <span class="para-text">麻痹中</span>` : `<span class="icon inactive">⚡</span>`;

        document.getElementById('hp-a').innerHTML = renderHP(pA.hp);
        document.getElementById('energy-a').innerHTML = renderEnergy(pA.energy);
        document.getElementById('barrier-a').innerHTML = renderBarrier(pA.barrierCount);
        document.getElementById('sword-a').innerHTML = renderSword(pA.swordCount, pA.swordState);
        document.getElementById('paralysis-a').innerHTML = renderParalysis(pA.isParalyzed);

        document.getElementById('hp-b').innerHTML = renderHP(pB.hp);
        document.getElementById('energy-b').innerHTML = renderEnergy(pB.energy);
        document.getElementById('barrier-b').innerHTML = renderBarrier(pB.barrierCount);
        document.getElementById('sword-b').innerHTML = renderSword(pB.swordCount, pB.swordState);
        document.getElementById('paralysis-b').innerHTML = renderParalysis(pB.isParalyzed);

        // 专属技能按钮显示控制
        const stealBtn = document.getElementById('steal-btn-a');
        stealBtn.style.display = pA.role === 'ROGUE' ? 'inline-block' : 'none';
        
        const healBtn = document.getElementById('heal-btn-a');
        healBtn.style.display = pA.role === 'PRIEST' ? 'inline-block' : 'none';

        const logText = document.getElementById('log-text');
        logText.innerText = this.roundLog;
        
        const logContainer = document.getElementById('log-container');
        logContainer.scrollTop = logContainer.scrollHeight;

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
        const names = { CHARGE: '集气', SWORD: '普通刀', ICE_SWORD: '冰刀', ELEC_SWORD: '电刀', FIRE: '火冲', BARRIER: '屏障', SHIELD: '盾牌', LIGHTNING: '狂雷', HOLY_SHIELD: '圣盾', STEAL: '神偷', MERCY_DEW: '慈露' };
        return names[action] || action;
    }

    shouldElecParalyze(defenseAction) {
        return [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(defenseAction);
    }

    resolveRound() {
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
        if (actA === Action.LIGHTNING) pA.energy -= 4; if (actB === Action.LIGHTNING) pB.energy -= 4;
        if (actA === Action.HOLY_SHIELD) pA.energy -= 1; if (actB === Action.HOLY_SHIELD) pB.energy -= 1;

        if (actA === Action.CHARGE && actB === Action.CHARGE) {
            log += "💤 双方都在安全距离蓄力集气，【无事发生】。\n";
            this.finishRound(log); return; 
        }

        let effDmgA = 0, effDmgB = 0;
        let paralyzeA = false, paralyzeB = false;
        let isIceElecCrossover = false;

        if (!isIceElecCrossover) {
            if (isHolyShieldB) {
                if (actA === Action.LIGHTNING) { effDmgA = 1; specialLog += `⚡🛡️ ${pA.name}的【狂雷】天威击穿了CPU的圣盾/慈露，造成 1 点余波伤害！\n`; } 
                else if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE].includes(actA)) { specialLog += `🛡️✨ CPU 的圣光庇护将 ${pA.name} 的[${this.getActionName(actA)}]完全化解！\n`; }
            } else {
                if (actA === Action.ICE_SWORD) {
                    if ([Action.FIRE, Action.LIGHTNING].includes(actB)) { effDmgA = 1; specialLog += `⚔️ ${pA.name}的冰刀破解打断了CPU的[${this.getActionName(actB)}]！\n`; }
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
                }
            }

            if (isHolyShieldA) {
                if (actB === Action.LIGHTNING) { effDmgB = 1; specialLog += `⚡🛡️ CPU的【狂雷】天威击穿了${pA.name}的圣盾/慈露，造成 1 点余波伤害！\n`; } 
                else if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE].includes(actB)) { specialLog += `🛡️✨ ${pA.name} 的圣光庇护将 CPU 的[${this.getActionName(actB)}]完全化解！\n`; }
            } else {
                if (actB === Action.ICE_SWORD) {
                    if ([Action.FIRE, Action.LIGHTNING].includes(actA)) { effDmgB = 1; specialLog += `⚔️ CPU的冰刀破解打断了${pA.name}的[${this.getActionName(actA)}]！\n`; }
                    else if (actA === Action.CHARGE) effDmgB = 1;
                } else if (actB === Action.ELEC_SWORD) {
                    if (actA === Action.SWORD) { specialLog += `⚡ CPU的电刀压制了${pA.name}的普通刀，并引发麻痹！\n`; }
                    else if (actA === Action.CHARGE) effDmgB = 1;
                    if (this.shouldElecParalyze(actA)) paralyzeA = true;
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
                }
            }
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
            }
        }
        if (actB === Action.SWORD && actA === Action.SHIELD) { 
            pB.swordCount--; 
            equipLog += `🛡️ ${pA.name}的盾牌震碎了CPU的1把普通刀！\n`; 
            if (pB.swordCount <= 0) { pB.swordState = 'BROKEN'; pB.specialSwordCharges = 0; }
            if (pB.role === 'METAL_WARRIOR') {
                pB.barrierCount++;
                equipLog += `⚙️ CPU 触发被动【刀碎生盾】，获得1层屏障！\n`;
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
            }
        }

        // 刀斩屏障 与 金属武者【盾碎生刀】被动
        if (isSwordA && actB === Action.BARRIER) { 
            pB.barrierCount--; 
            equipLog += `💥 ${pA.name}击碎了CPU的1层[屏障]！\n`; 
            if (actA === Action.ELEC_SWORD) {
                equipLog += `⚡ 电刀击碎了屏障，但屏障吸收了麻痹电流。\n`;
            }
            if (pB.role === 'METAL_WARRIOR') {
                pB.swordCount++;
                if (pB.swordState === 'BROKEN') pB.swordState = 'NORMAL';
                equipLog += `⚙️ CPU 触发被动【盾碎生刀】，获得1把刀！\n`;
            }
        }
        if (isSwordB && actA === Action.BARRIER) { 
            pA.barrierCount--; 
            equipLog += `💥 CPU击碎了${pA.name}的1层[屏障]！\n`; 
            if (actB === Action.ELEC_SWORD) {
                equipLog += `⚡ 电刀击碎了屏障，但屏障吸收了麻痹电流。\n`;
            }
            if (pA.role === 'METAL_WARRIOR') {
                pA.swordCount++;
                if (pA.swordState === 'BROKEN') pA.swordState = 'NORMAL';
                equipLog += `⚙️ ${pA.name} 触发被动【盾碎生刀】，获得1把刀！\n`;
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

        this.finishRound(log);
    }

    finishRound(log) {
        this.playerA.isParalyzed = false; this.playerB.isParalyzed = false;
        if (this.playerA.nextTurnParalyze) { this.playerA.isParalyzed = true; this.playerA.nextTurnParalyze = false; }
        if (this.playerB.nextTurnParalyze) { this.playerB.isParalyzed = true; this.playerB.nextTurnParalyze = false; }
        
        this.playerA.currentAction = null; this.playerB.currentAction = null;
        this.battleResult = null;

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
Game.prototype.updateDuelUI = Game.prototype.updateUI;
Game.prototype.resolveDuelRound = Game.prototype.resolveRound;
Game.prototype.finishDuelRound = Game.prototype.finishRound;

Game.prototype.getPlayers = function() {
    return [this.playerA, this.playerB, this.playerC, this.playerD];
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

Game.prototype.applySuddenDeathStats = function() {
    [this.playerA, this.playerB].forEach(player => {
        player.hp = 1;
        player.maxHp = 1;
        player.energy = 3;
    });
};

Game.prototype.getSuddenDeathIntroText = function() {
    return `突然死亡模式开始！${this.playerA.name} [${this.playerA.getRoleName()}] VS CPU [${this.playerB.getRoleName()}]。规则：每人1点生命、3点气；普通刀消耗1点气；冰刀和电刀专门对抗火冲与狂雷。`;
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
        case Action.HOLY_SHIELD: return player.role !== 'BARBARIAN' && player.energy >= 1;
        case Action.STEAL: return player.role === 'ROGUE' && !player.hasStolen;
        case Action.MERCY_DEW: return player.role === 'PRIEST' && !player.hasHealed && player.energy >= 1;
        default: return false;
    }
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

Game.prototype.setOverlay = function(id) {
    ['story-screen', 'main-menu-screen', 'pve-mode-screen', 'career-screen', 'login-screen'].forEach(screenId => {
        const el = document.getElementById(screenId);
        if (!el) return;
        el.classList.toggle('hidden', screenId !== id);
        el.style.display = screenId === id ? 'flex' : 'none';
    });
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
        <article class="career-card faction-${profile.factionKey}" data-role="${role}">
            <img src="${profile.image}" alt="${profile.name}">
            <div>
                <h3>${profile.name}</h3>
                <small>${profile.faction}</small>
                <p>${profile.description}</p>
                <strong>${profile.skillName}：${profile.skill}</strong>
            </div>
        </article>
    `).join('');
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
    const loginScreen = document.getElementById('login-screen');
    const startBtn = document.getElementById('start-game-btn');
    const usernameInput = document.getElementById('username-input');
    const roleASelect = document.getElementById('role-a');
    const roleBSelect = document.getElementById('role-b');
    const roleCSelect = document.getElementById('role-c');
    const roleDSelect = document.getElementById('role-d');
    const difficultySelect = document.getElementById('cpu-difficulty');
    const roleDifficultySelect = document.getElementById('role-cpu-difficulty');

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
                <img class="role-card-image" src="${profile.image}" alt="${profile.name}">
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
    if (!statusBar || !stageArea) return;

    if (!this.isMultiplayerMode()) {
        statusBar.classList.remove('ffa-status-bar');
        stageArea.className = 'stage-area';
        statusBar.innerHTML = `
            <div class="player-status p1">
                <div id="name-display-a" class="name-label">玩家 A</div>
                <div class="status-line" id="hp-a"></div>
                <div class="status-line" id="energy-a"></div>
                <div class="status-line buffs"><span id="barrier-a"></span><span id="sword-a"></span><span id="paralysis-a"></span></div>
            </div>
            <div class="vs-badge">VS</div>
            <div class="player-status p2">
                <div id="name-display-b" class="name-label">CPU</div>
                <div class="status-line" id="hp-b" style="justify-content: flex-end;"></div>
                <div class="status-line" id="energy-b" style="justify-content: flex-end;"></div>
                <div class="status-line buffs" style="justify-content: flex-end;"><span id="barrier-b"></span><span id="sword-b"></span><span id="paralysis-b"></span></div>
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
    const rightChars = this.gameMode === 'ffa'
        ? `${this.renderCharacterBlock(this.playerC, 'p2-avatar')}${this.renderCharacterBlock(this.playerD, 'p2-avatar')}`
        : `${this.renderCharacterBlock(this.playerB, 'p2-avatar')}${this.renderCharacterBlock(this.playerD, 'p2-avatar')}`;
    stageArea.innerHTML = `
        <div class="team-formation player-side">${leftChars}</div>
        <div class="team-formation cpu-side">${rightChars}</div>`;
};

Game.prototype.renderStatusBlock = function(player, right = false) {
    const id = player.id.toLowerCase();
    const justify = right ? ' style="justify-content: flex-end;"' : '';
    return `<div class="player-status ${right ? 'p2' : 'p1'}" data-player-id="${player.id}">
        <div id="name-display-${id}" class="name-label"></div>
        <div class="status-line" id="hp-${id}"${justify}></div>
        <div class="status-line" id="energy-${id}"${justify}></div>
        <div class="status-line buffs"${justify}><span id="barrier-${id}"></span><span id="sword-${id}"></span><span id="paralysis-${id}"></span></div>
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
    const asset = this.effectAssetFor(action);
    if (!layer || !asset) return;
    
    const el = document.createElement('div');
    el.className = `battle-effect ${kind}`;
    el.style.backgroundImage = `url("${asset}")`;

// ======== 👇 尺寸与位置微调控制中心 👇 ========
    let effectSize = 100; 
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
    setTimeout(() => el.remove(), 900);
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
        if (![Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.LIGHTNING].includes(action)) return;
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
    this.getPlayers().forEach(player => player.reset());
    if (this.isSuddenDeathMode()) this.applySuddenDeathStats();
    this.pendingHumanIndex = 0;
    this.battleResult = null;
    this.roundLog = '游戏重置！新的对决开始。';
    this.hideEndActions();
    if (this.isSuddenDeathMode()) {
        this.roundLog = this.getSuddenDeathIntroText();
    }
    this.updateUI();
};

Game.prototype.returnToRoleSelect = function() {
    this.getPlayers().forEach(player => player.reset());
    this.pendingHumanIndex = 0;
    this.battleResult = null;
    this.roundLog = '请选择角色后进入战场。';
    this.hideEndActions();
    this.configureRoleSelectionMode();
    this.setOverlay('login-screen');
};

Game.prototype.startGame = function() {
    this.renderBattleLayout();
    this.bindActionEvents();
    const restartBtn = document.getElementById('restart-btn');
    const returnRoleBtn = document.getElementById('return-role-btn');
    restartBtn.onclick = () => this.resetCurrentMatch();
    if (returnRoleBtn) returnRoleBtn.onclick = () => this.returnToRoleSelect();
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
    return [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.STEAL, Action.MERCY_DEW].includes(action);
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
    setTimeout(() => {
        this.cpuDecision();
        this.playRoundEffects(this.currentAttackPairs());
        this.updateUI();
        setTimeout(() => this.resolveRound(), 500);
    }, 400);
};

Game.prototype.lockTeamAction = function(actor, action, target, subContainer, targetPicker) {
    if (!actor) return;
    actor.currentAction = action;
    actor.currentTarget = target;
    subContainer.classList.add('hidden');
    targetPicker?.classList.add('hidden');
    this.updateUI();
    setTimeout(() => {
        this.aiControlledPlayers().forEach(cpu => this.cpuDecisionFor(cpu, this.opponentsOf(cpu), this.alliesOf(cpu)));
        this.playRoundEffects(this.currentAttackPairs());
        this.updateUI();
        setTimeout(() => this.resolveRound(), 500);
    }, 400);
};

Game.prototype.continueCpuOnlyRound = function() {
    if (!this.isMultiplayerMode() || this.battleResult || this.playerA.hp > 0) return;
    setTimeout(() => {
        this.aiControlledPlayers().forEach(cpu => this.cpuDecisionFor(cpu, this.opponentsOf(cpu), this.alliesOf(cpu)));
        this.playRoundEffects(this.currentAttackPairs());
        this.updateUI();
        setTimeout(() => this.resolveRound(), 500);
    }, 650);
};

Game.prototype.cpuDecision = function() {
    this.cpuDecisionFor(this.playerB, [this.playerA], [this.playerB]);
};

Game.prototype.cpuDecisionFor = function(cpu, opponents, allies) {
    if (!cpu || cpu.hp <= 0) return;

    if (cpu.isParalyzed) {
        cpu.currentAction = Action.CHARGE;
        cpu.currentTarget = this.alive(opponents)[0] || null;
        cpu.aiTargetIntent = null;
        cpu.aiTargetIntents = null;
        return;
    }

    const validActions = Object.values(Action).filter(action => this.canUseAction(cpu, action));
    const aliveOpponents = this.alive(opponents);
    const aliveAllies = this.alive(allies);
    const weights = {};
    validActions.forEach(action => { weights[action] = 1; });
    cpu.aiTargetIntent = null;
    cpu.aiTargetIntents = {};

    const setWeight = (action, value, target = null) => {
        if (!validActions.includes(action)) return;
        if (value > (weights[action] || 0)) {
            weights[action] = value;
            if (target) cpu.aiTargetIntents[action] = target.id;
        }
    };
    const addWeight = (action, value, target = null) => {
        if (!validActions.includes(action)) return;
        weights[action] = (weights[action] || 0) + value;
        if (target && value > 0 && !cpu.aiTargetIntents[action]) cpu.aiTargetIntents[action] = target.id;
    };
    const isHolyAction = action => [Action.HOLY_SHIELD, Action.STEAL, Action.MERCY_DEW].includes(action);
    const canFireHit = target => target && target.currentAction !== Action.BARRIER && target.currentAction !== Action.ICE_SWORD && !isHolyAction(target.currentAction);
    const canSwordHit = target => target && ![Action.SHIELD, Action.BARRIER].includes(target.currentAction) && !isHolyAction(target.currentAction);
    const canNormalSwordHit = target => canSwordHit(target) && ![Action.FIRE, Action.ELEC_SWORD].includes(target.currentAction);
    const canLightningHitHard = target => target && target.currentAction !== Action.CHARGE && target.currentAction !== Action.ICE_SWORD;
    const awakenedOpponents = aliveOpponents.filter(player => player.swordState === 'UNLOCKED' && player.swordCount > 0);
    const readySpecialSwordOpponents = awakenedOpponents.filter(player => player.energy >= 1 && !player.isParalyzed);
    const fireCapableOpponents = aliveOpponents.filter(player => player.energy >= 2 && !player.isParalyzed);
    const normalSwordCapableOpponents = aliveOpponents.filter(player => player.swordCount > 0 && player.swordState === 'NORMAL' && !player.isParalyzed);
    const weakestOpponent = aliveOpponents.slice().sort((a, b) => a.hp - b.hp || b.energy - a.energy)[0];
    const highestEnergyOpponent = aliveOpponents.slice().sort((a, b) => b.energy - a.energy || a.hp - b.hp)[0];

    if (this.isSuddenDeathMode()) {
        if (validActions.includes(Action.CHARGE)) weights[Action.CHARGE] = cpu.energy < 2 ? 6 : 1;
        if (validActions.includes(Action.SWORD)) weights[Action.SWORD] = cpu.swordState === 'NORMAL' ? 7 : 0;
        if (validActions.includes(Action.FIRE)) weights[Action.FIRE] = 8;
        if (validActions.includes(Action.LIGHTNING)) weights[Action.LIGHTNING] = 5;
        const spellTarget = aliveOpponents.find(player => [Action.FIRE, Action.LIGHTNING].includes(player.currentAction))
            || aliveOpponents.find(player => player.energy >= 2 && !player.isParalyzed);
        if (spellTarget) {
            setWeight(Action.ICE_SWORD, spellTarget.currentAction ? 22 : 9, spellTarget);
            setWeight(Action.ELEC_SWORD, spellTarget.currentAction ? 14 : 7, spellTarget);
            if (spellTarget.energy >= 4) addWeight(Action.CHARGE, 4);
        }
        if (aliveOpponents.some(player => player.currentAction === Action.SWORD)) {
            addWeight(Action.SHIELD, 8);
            addWeight(Action.BARRIER, 4);
        }
        if (validActions.includes(Action.MERCY_DEW)) weights[Action.MERCY_DEW] = cpu.hp < cpu.maxHp ? 10 : 1;
    }

    if (!this.isSuddenDeathMode() && this.cpuDifficulty === 'easy') {
        if (validActions.includes(Action.CHARGE)) weights[Action.CHARGE] = cpu.energy < 1 ? 6 : 2;
        if (validActions.includes(Action.SWORD)) weights[Action.SWORD] = cpu.swordState === 'NORMAL' ? 3 : 0;
        if (validActions.includes(Action.ICE_SWORD)) weights[Action.ICE_SWORD] = cpu.swordState === 'UNLOCKED' ? 4 : 1;
        if (validActions.includes(Action.ELEC_SWORD)) weights[Action.ELEC_SWORD] = cpu.swordState === 'UNLOCKED' ? 4 : 1;
        if (validActions.includes(Action.FIRE)) weights[Action.FIRE] = cpu.energy >= 3 ? 2 : 1;
        if (readySpecialSwordOpponents.length) {
            addWeight(Action.SHIELD, 2);
            addWeight(Action.HOLY_SHIELD, 2);
        }
    } else if (!this.isSuddenDeathMode() && this.cpuDifficulty === 'normal') {
        if (validActions.includes(Action.LIGHTNING)) weights[Action.LIGHTNING] = 5;
        if (validActions.includes(Action.FIRE)) weights[Action.FIRE] = 3;
        if (aliveOpponents.some(player => player.isParalyzed) && validActions.includes(Action.FIRE)) weights[Action.FIRE] = 8;
        if (validActions.includes(Action.SWORD)) weights[Action.SWORD] = cpu.swordState === 'NORMAL' ? 4 : 0;
        if (validActions.includes(Action.ICE_SWORD)) weights[Action.ICE_SWORD] = cpu.swordState === 'UNLOCKED' ? 8 : 4;
        if (validActions.includes(Action.ELEC_SWORD)) weights[Action.ELEC_SWORD] = cpu.swordState === 'UNLOCKED' ? 8 : 4;
        if (aliveOpponents.some(player => player.energy >= 4) && validActions.includes(Action.HOLY_SHIELD)) weights[Action.HOLY_SHIELD] = 4;
        if (validActions.includes(Action.STEAL)) weights[Action.STEAL] = 6;
        if (validActions.includes(Action.MERCY_DEW)) weights[Action.MERCY_DEW] = cpu.hp < cpu.maxHp ? 12 : 1;
        if (readySpecialSwordOpponents.length) {
            const target = readySpecialSwordOpponents[0];
            setWeight(Action.SHIELD, 8);
            if (fireCapableOpponents.length || cpu.role === 'PALADIN') setWeight(Action.HOLY_SHIELD, cpu.role === 'PALADIN' ? 5 : 3);
            addWeight(Action.ELEC_SWORD, 4, target);
            addWeight(Action.FIRE, 3, target);
        }
        if (!fireCapableOpponents.length && validActions.includes(Action.HOLY_SHIELD) && cpu.role !== 'PALADIN') {
            weights[Action.HOLY_SHIELD] = Math.min(weights[Action.HOLY_SHIELD] || 0, 1);
        }
        if (cpu.swordState === 'UNLOCKED' && cpu.energy < 1) setWeight(Action.CHARGE, 9);
    }

    if (!this.isSuddenDeathMode() && this.cpuDifficulty === 'hard' && aliveOpponents.length) {
        const chargingTargets = aliveOpponents.filter(player => player.currentAction === Action.CHARGE || player.isParalyzed);
        const lightningActors = aliveOpponents.filter(player => player.currentAction === Action.LIGHTNING);
        const fireActors = aliveOpponents.filter(player => player.currentAction === Action.FIRE);
        const swordActors = aliveOpponents.filter(player => [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(player.currentAction));
        const lightningThreats = aliveOpponents.filter(player => player.energy >= 4 && !player.isParalyzed);
        const unlockedSwordThreats = readySpecialSwordOpponents;
        const waitingAwakenedOpponents = awakenedOpponents.filter(player => player.energy < 1);
        const anyEnemyHasSword = aliveOpponents.some(player => player.swordCount > 0 && player.swordState !== 'BROKEN');
        const anyEnemyHasEnergy = aliveOpponents.some(player => player.energy > 0);
        const allEnemySwordsBroken = !anyEnemyHasSword;

        const fireKillTarget = aliveOpponents.find(player => player.hp <= 2 && canFireHit(player));
        const iceKillTarget = aliveOpponents.find(player => player.hp <= 1 && [Action.FIRE, Action.LIGHTNING, Action.CHARGE].includes(player.currentAction));
        const elecKillTarget = aliveOpponents.find(player => player.hp <= 1 && [Action.SWORD, Action.CHARGE].includes(player.currentAction));
        const normalSwordKillTarget = aliveOpponents.find(player => player.hp <= 1 && canNormalSwordHit(player));
        const lightningKillTargets = aliveOpponents.filter(player => player.hp <= (isHolyAction(player.currentAction) ? 1 : 3) && canLightningHitHard(player));
        const hasLethal = lightningKillTargets.length > 0 || !!fireKillTarget || !!iceKillTarget || !!elecKillTarget || !!normalSwordKillTarget;

        if (lightningKillTargets.length) setWeight(Action.LIGHTNING, 95);
        if (fireKillTarget) setWeight(Action.FIRE, 90, fireKillTarget);
        if (elecKillTarget) setWeight(Action.ELEC_SWORD, 88, elecKillTarget);
        if (iceKillTarget) setWeight(Action.ICE_SWORD, 84, iceKillTarget);
        if (normalSwordKillTarget) setWeight(Action.SWORD, 72, normalSwordKillTarget);

        if (chargingTargets.length) {
            if (!hasLethal) setWeight(Action.STEAL, 85, chargingTargets[0]);
            addWeight(Action.FIRE, 18, chargingTargets[0]);
            addWeight(Action.SWORD, 12, chargingTargets[0]);
            addWeight(Action.ICE_SWORD, 4, chargingTargets[0]);
            if (validActions.includes(Action.BARRIER)) weights[Action.BARRIER] = 0;
            if (validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = 0;
        }

        if (lightningActors.length || lightningThreats.length) {
            const target = lightningActors[0] || lightningThreats[0];
            setWeight(Action.CHARGE, lightningActors.length ? 80 : 38);
            setWeight(Action.ICE_SWORD, lightningActors.length ? 76 : 34, target);
            setWeight(Action.HOLY_SHIELD, lightningActors.length && cpu.hp > 1 ? 12 : 4);
            if (validActions.includes(Action.BARRIER)) weights[Action.BARRIER] = 0;
            if (validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = 0;
        }

        if (fireActors.length) {
            setWeight(Action.BARRIER, 34);
            setWeight(Action.HOLY_SHIELD, 22);
            addWeight(Action.ICE_SWORD, 18, fireActors[0]);
        } else if (highestEnergyOpponent?.energy >= 2) {
            addWeight(Action.BARRIER, 8);
            addWeight(Action.HOLY_SHIELD, 3);
        }

        if (swordActors.length || unlockedSwordThreats.length) {
            const target = swordActors[0] || unlockedSwordThreats[0];
            if (target.energy >= 1 || [Action.ICE_SWORD, Action.ELEC_SWORD].includes(target.currentAction)) {
                setWeight(Action.SHIELD, 24);
                if (cpu.role === 'PALADIN' && target.currentAction === Action.SWORD) setWeight(Action.HOLY_SHIELD, 20);
                if (target.currentAction === Action.SWORD) addWeight(Action.ELEC_SWORD, 24, target);
            } else {
                addWeight(Action.SHIELD, 6);
                if (cpu.role === 'PALADIN') addWeight(Action.HOLY_SHIELD, 4);
            }
        }
        if (waitingAwakenedOpponents.length) {
            const target = waitingAwakenedOpponents[0];
            addWeight(Action.STEAL, 18, target);
            addWeight(Action.FIRE, 10, target);
            if (validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = Math.min(weights[Action.SHIELD] || 0, 3);
        }

        if (allEnemySwordsBroken && validActions.includes(Action.SHIELD)) weights[Action.SHIELD] = 0;
        if (!anyEnemyHasEnergy && !swordActors.length && !unlockedSwordThreats.length) {
            if (validActions.includes(Action.HOLY_SHIELD)) weights[Action.HOLY_SHIELD] = 0;
            if (validActions.includes(Action.BARRIER) && !(cpu.role === 'METAL_WARRIOR' && cpu.swordCount <= 0)) weights[Action.BARRIER] = 0;
        }
        if (!fireCapableOpponents.length && !lightningActors.length && !fireActors.length && !normalSwordCapableOpponents.length && cpu.role !== 'PALADIN') {
            if (validActions.includes(Action.HOLY_SHIELD)) weights[Action.HOLY_SHIELD] = 0;
        } else if (!fireCapableOpponents.length && !lightningActors.length && !fireActors.length && cpu.role !== 'PALADIN') {
            if (validActions.includes(Action.HOLY_SHIELD)) weights[Action.HOLY_SHIELD] = Math.min(weights[Action.HOLY_SHIELD] || 0, 2);
        }

        if (cpu.swordState === 'UNLOCKED') {
            const pressureTarget = weakestOpponent || highestEnergyOpponent;
            if (cpu.energy < 1) {
                setWeight(Action.CHARGE, 50);
            } else {
                const spellTarget = fireActors[0] || lightningActors[0] || pressureTarget;
                const swordTarget = swordActors.find(player => [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(player.currentAction))
                    || aliveOpponents.find(player => player.currentAction === Action.BARRIER)
                    || pressureTarget;
                addWeight(Action.ICE_SWORD, (fireActors.length || lightningActors.length) ? 40 : 24, spellTarget);
                addWeight(Action.ELEC_SWORD, [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(swordTarget?.currentAction) ? 38 : 18, swordTarget);
                addWeight(Action.FIRE, 8, pressureTarget);
            }
        }

        if (cpu.energy < 2 && !chargingTargets.length) addWeight(Action.CHARGE, 16);
        if (validActions.includes(Action.MERCY_DEW)) {
            const woundedAlly = aliveAllies.slice().sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0];
            if (woundedAlly && woundedAlly.hp < woundedAlly.maxHp) {
                setWeight(Action.MERCY_DEW, lightningActors.length ? 4 : 42, woundedAlly);
            }
        }
    }

    let totalWeight = validActions.reduce((sum, action) => sum + weights[action], 0);
    if (totalWeight <= 0) {
        validActions.forEach(action => { weights[action] = 1; });
        totalWeight = validActions.length;
    }

    let roll = Math.random() * totalWeight;
    let selectedAction = validActions[0] || Action.CHARGE;
    for (const action of validActions) {
        roll -= weights[action];
        if (roll <= 0) {
            selectedAction = action;
            break;
        }
    }

    cpu.currentAction = selectedAction;
    cpu.currentTarget = this.pickCpuTarget(cpu, selectedAction, aliveOpponents, aliveAllies);
    cpu.aiTargetIntent = null;
    cpu.aiTargetIntents = null;
};

Game.prototype.pickCpuTarget = function(cpu, action, opponents, allies) {
    const intent = cpu.aiTargetIntent;
    if (intent?.action === action) {
        const target = [...opponents, ...allies].find(player => player.id === intent.targetId && player.hp > 0);
        if (target) return target;
    }
    const intentTargetId = cpu.aiTargetIntents?.[action];
    if (intentTargetId) {
        const target = [...opponents, ...allies].find(player => player.id === intentTargetId && player.hp > 0);
        if (target) return target;
    }
    if (action === Action.MERCY_DEW) {
        return allies.slice().sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp))[0] || cpu;
    }
    if ([Action.LIGHTNING, Action.CHARGE, Action.BARRIER, Action.SHIELD, Action.HOLY_SHIELD].includes(action)) return null;

    if (action === Action.STEAL) {
        return opponents.find(player => player.currentAction === Action.CHARGE || player.isParalyzed)
            || opponents.slice().sort((a, b) => a.energy - b.energy || a.hp - b.hp)[0]
            || null;
    }

    if (action === Action.ICE_SWORD) {
        if (this.isSuddenDeathMode()) {
            return opponents.find(player => [Action.FIRE, Action.LIGHTNING].includes(player.currentAction))
                || opponents.find(player => player.energy >= 2)
                || opponents.slice().sort((a, b) => a.hp - b.hp || b.energy - a.energy)[0]
                || null;
        }
        return opponents.find(player => [Action.FIRE, Action.LIGHTNING, Action.CHARGE].includes(player.currentAction))
            || opponents.slice().sort((a, b) => a.hp - b.hp || b.energy - a.energy)[0]
            || null;
    }
    if (action === Action.ELEC_SWORD) {
        if (this.isSuddenDeathMode()) {
            return opponents.find(player => [Action.FIRE, Action.LIGHTNING].includes(player.currentAction))
                || opponents.find(player => player.energy >= 2)
                || opponents.slice().sort((a, b) => b.energy - a.energy || a.hp - b.hp)[0]
                || null;
        }
        return opponents.find(player => [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(player.currentAction))
            || opponents.find(player => player.currentAction === Action.CHARGE)
            || opponents.find(player => player.currentAction === Action.BARRIER)
            || opponents.slice().sort((a, b) => a.hp - b.hp || b.energy - a.energy)[0]
            || null;
    }

    if (action === Action.FIRE) {
        return opponents.find(player => player.hp <= 2 && player.currentAction !== Action.BARRIER && player.currentAction !== Action.ICE_SWORD)
            || opponents.slice().sort((a, b) => a.hp - b.hp || b.energy - a.energy)[0]
            || null;
    }

    return opponents.slice().sort((a, b) => a.hp - b.hp || b.energy - a.energy)[0] || null;
};

Game.prototype.updateUI = function() {
    if (!this.isMultiplayerMode()) {
        const result = this.updateDuelUI();
        this.syncSwordControls(this.currentHumanActor());
        return result;
    }

    const renderHP = (hp) => hp <= 0 ? '<span style="font-size:18px;">💀</span>' : '<span class="icon heart">❤️</span>'.repeat(hp);
    const renderEnergy = (en) => en <= 0 ? '<span class="empty-text">空</span>' : '<div class="energy-circle"></div>'.repeat(en);
    const renderBarrier = (count) => count > 0 ? '<span class="icon active">🛡️</span>'.repeat(count) : '<span class="icon inactive">🛡️</span> <span class="empty-text">破碎</span>';
    const renderSword = (count, state) => {
        if (state === 'BROKEN' || count <= 0) return '<span class="icon inactive">🗡️</span> <span class="empty-text">震碎</span>';
        const suffix = state === 'UNLOCKED' ? '<span class="unlocked-text">[觉醒]</span>' : '';
        return '<span class="icon active">🗡️</span>'.repeat(count) + suffix;
    };
    const renderParalysis = (isPara) => isPara ? '<span class="icon paralyzed">⚡</span> <span class="para-text">麻痹中</span>' : '<span class="icon inactive">⚡</span>';

    this.getPlayers().forEach(player => {
        const id = player.id.toLowerCase();
        const nameEl = document.getElementById(`name-display-${id}`);
        if (!nameEl) return;
        nameEl.innerText = `${this.playerLabel(player)} [${player.getRoleName()}]`;
        document.getElementById(`hp-${id}`).innerHTML = renderHP(player.hp);
        document.getElementById(`energy-${id}`).innerHTML = renderEnergy(player.energy);
        document.getElementById(`barrier-${id}`).innerHTML = renderBarrier(player.barrierCount);
        document.getElementById(`sword-${id}`).innerHTML = renderSword(player.swordCount, player.swordState);
        document.getElementById(`paralysis-${id}`).innerHTML = renderParalysis(player.isParalyzed);
        const avatar = document.querySelector(`.avatar-${id}`);
        if (avatar) this.updateBattleAvatar(avatar, player, player.id === 'A' ? '🙂' : '🤖', this.battleResult?.[player.id]);
        const lock = document.getElementById(`lock-status-${id}`);
        if (lock) {
            if (player.hp <= 0) { lock.classList.add('hidden'); }
            else if (player.isParalyzed) { lock.innerText = '⚡ 麻痹'; lock.classList.remove('hidden'); }
            else if (player.currentAction) { lock.innerText = '🔒 已锁定'; lock.classList.remove('hidden'); }
            else if (player.id === 'A') { lock.innerText = '等待选择...'; lock.classList.toggle('hidden', player !== this.currentHumanActor()); }
            else { lock.innerText = '思考中...'; lock.classList.remove('hidden'); }
        }
    });

    document.getElementById('log-text').innerText = this.roundLog;
    const logContainer = document.getElementById('log-container');
    logContainer.scrollTop = logContainer.scrollHeight;

    const actor = this.currentHumanActor();
    document.getElementById('steal-btn-a').style.display = actor?.role === 'ROGUE' ? 'inline-block' : 'none';
    document.getElementById('heal-btn-a').style.display = actor?.role === 'PRIEST' ? 'inline-block' : 'none';
    document.querySelectorAll('#control-panel button.action-btn').forEach(btn => {
        const action = btn.dataset.action;
        if (action) {
            const isSwordMenu = action === Action.SWORD && actor?.swordState === 'UNLOCKED' && actor.swordCount > 0 && !actor.isParalyzed;
            btn.disabled = !actor || !!this.battleResult || (!isSwordMenu && !this.canUseAction(actor, action));
        }
    });
    this.syncSwordControls(actor);
};

Game.prototype.resolveRound = function() {
    if (this.isSuddenDeathMode()) return this.resolveSuddenDeathRound();
    if (!this.isMultiplayerMode()) return this.resolveDuelRound();
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
        if (action === Action.LIGHTNING) actor.energy -= 4;
        if (action === Action.HOLY_SHIELD) actor.energy -= 1;
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
            } else if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE].includes(action)) {
                text += `${defender === pA ? pA.name : 'CPU'} 的圣盾化解了【${this.getActionName(action)}】。\n`;
            }
        } else if (action === Action.ICE_SWORD) {
            if ([Action.FIRE, Action.LIGHTNING].includes(defense)) {
                damage = 1;
                text += `${attacker === pA ? pA.name : 'CPU'} 的【冰刀】克制【${this.getActionName(defense)}】，造成1点伤害。\n`;
            }
        } else if (action === Action.ELEC_SWORD) {
            if ([Action.FIRE, Action.LIGHTNING].includes(defense)) {
                paralyze = true;
                text += `${attacker === pA ? pA.name : 'CPU'} 的【电刀】扰乱【${this.getActionName(defense)}】，造成麻痹。\n`;
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
        }
        return { damage, paralyze, text };
    };

    let resultA = calcAttack(pA, pB);
    let resultB = calcAttack(pB, pA);
    let equipLog = '';

    if (actA === Action.SWORD && actB === Action.SHIELD) {
        pA.swordCount -= 1;
        if (pA.swordCount <= 0) { pA.swordState = 'BROKEN'; pA.specialSwordCharges = 0; }
        if (pA.role === 'METAL_WARRIOR') pA.barrierCount += 1;
        equipLog += `CPU 的盾牌震碎了${pA.name}的普通刀。\n`;
    }
    if (actB === Action.SWORD && actA === Action.SHIELD) {
        pB.swordCount -= 1;
        if (pB.swordCount <= 0) { pB.swordState = 'BROKEN'; pB.specialSwordCharges = 0; }
        if (pB.role === 'METAL_WARRIOR') pB.barrierCount += 1;
        equipLog += `${pA.name} 的盾牌震碎了CPU的普通刀。\n`;
    }
    if (actA === Action.SWORD && actB === Action.HOLY_SHIELD && pB.role === 'PALADIN' && !pB.hasBrokenSword) {
        pB.hasBrokenSword = true;
        pA.swordCount -= 1;
        if (pA.swordCount <= 0) { pA.swordState = 'BROKEN'; pA.specialSwordCharges = 0; }
        if (pA.role === 'METAL_WARRIOR') pA.barrierCount += 1;
        equipLog += `CPU 的第一次圣骑士圣盾震碎了${pA.name}的普通刀。\n`;
    }
    if (actB === Action.SWORD && actA === Action.HOLY_SHIELD && pA.role === 'PALADIN' && !pA.hasBrokenSword) {
        pA.hasBrokenSword = true;
        pB.swordCount -= 1;
        if (pB.swordCount <= 0) { pB.swordState = 'BROKEN'; pB.specialSwordCharges = 0; }
        if (pB.role === 'METAL_WARRIOR') pB.barrierCount += 1;
        equipLog += `${pA.name} 的第一次圣骑士圣盾震碎了CPU的普通刀。\n`;
    }
    if (isSword(actA) && actB === Action.BARRIER) {
        pB.barrierCount -= 1;
        if (pB.role === 'METAL_WARRIOR') {
            pB.swordCount += 1;
            if (pB.swordState === 'BROKEN') pB.swordState = 'NORMAL';
        }
        equipLog += `${pA.name} 击碎了CPU的1层屏障。\n`;
    }
    if (isSword(actB) && actA === Action.BARRIER) {
        pA.barrierCount -= 1;
        if (pA.role === 'METAL_WARRIOR') {
            pA.swordCount += 1;
            if (pA.swordState === 'BROKEN') pA.swordState = 'NORMAL';
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

    this.finishRound(log);
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
            if (target?.currentAction === Action.CHARGE) {
                stolenCharge.add(target.id);
                actor.energy += 1;
                log += `🕶 ${this.playerLabel(actor)} 使用【神偷】，偷走了 ${this.playerLabel(target)} 正在凝聚的气。\n`;
            } else {
                log += `🕶 ${this.playerLabel(actor)} 使用【神偷】，但目标没有集气。\n`;
            }
        }
    });

    allActors.forEach(actor => {
        const action = actor.currentAction;
        if (action === Action.CHARGE && !stolenCharge.has(actor.id)) actor.energy += 1;
        if (action === Action.FIRE) actor.energy -= 2;
        if ([Action.ICE_SWORD, Action.ELEC_SWORD].includes(action)) actor.energy -= 1;
        if (action === Action.LIGHTNING) actor.energy -= 4;
        if (action === Action.HOLY_SHIELD) actor.energy -= 1;
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

    // 1. 定义技能出手优先级（数字越大，出手越快）
    const getActionPriority = (action) => {
        if (action === Action.LIGHTNING) return 3;
        if (action === Action.FIRE) return 2;
        if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(action)) return 1;
        return 0; // 其他非攻击技能
    };

    // 2. 筛选出所有发动攻击的角色，并按优先级降序排列
    const attackingActors = allActors.filter(actor =>
        [Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD, Action.FIRE, Action.LIGHTNING].includes(actor.currentAction)
    ).sort((a, b) => getActionPriority(b.currentAction) - getActionPriority(a.currentAction));

    // 3. 按优先级依次结算攻击
    attackingActors.forEach(actor => {
        // 【核心裁定】：如果该角色在出手前，已经被更高优先级的技能击杀，则直接打断其攻击！
        if (actor.hp <= 0) {
            log += `💀 ${this.playerLabel(actor)} 在出手前已被击倒，【${this.getActionName(actor.currentAction)}】被打断！\n`;
            return;
        }

        const action = actor.currentAction;
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
    let damage = 0;
    let log = '';

    if (holyDefense) {
        damage = action === Action.LIGHTNING ? 1 : 0;
        // 加入 && !target.hasBrokenSword 判定
        if (target.role === 'PALADIN' && defense === Action.HOLY_SHIELD && action === Action.SWORD && !target.hasBrokenSword) {
            target.hasBrokenSword = true; // 消耗特权
            actor.swordCount -= 1;
            if (actor.swordCount <= 0) { actor.swordState = 'BROKEN'; actor.specialSwordCharges = 0; }
            if (actor.role === 'METAL_WARRIOR') actor.barrierCount += 1;
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
        } else if (defense === Action.BARRIER) {
            log += `🛡 ${this.playerLabel(target)} 的屏障挡下了火冲。\n`;
        } else if (defense !== Action.ICE_SWORD) {
            damage = 2;
        }
    } else if (action === Action.SWORD) {
        if ([Action.SWORD, Action.ICE_SWORD, Action.ELEC_SWORD].includes(defense)) {
            log += `⚔ ${this.playerLabel(actor)} 与 ${this.playerLabel(target)} 的刀势互相碰撞，未造成伤害。\n`;
            return log;
        }
        if (defense === Action.LIGHTNING) {
            log += `⚡ ${this.playerLabel(target)} 的狂雷压制了 ${this.playerLabel(actor)} 的普通刀。\n`;
            return log;
        }
        if (defense === Action.SHIELD && action === Action.SWORD) {
            actor.swordCount -= 1;
            if (actor.swordCount <= 0) { actor.swordState = 'BROKEN'; actor.specialSwordCharges = 0; }
            if (actor.role === 'METAL_WARRIOR') actor.barrierCount += 1;
            log += `🛡 ${this.playerLabel(target)} 的盾牌震碎了 ${this.playerLabel(actor)} 的普通刀。\n`;
            return log;
        }
        if (defense === Action.BARRIER) {
            target.barrierCount -= 1;
            if (target.role === 'METAL_WARRIOR') {
                target.swordCount += 1;
                if (target.swordState === 'BROKEN') target.swordState = 'NORMAL';
            }
            log += `💥 ${this.playerLabel(actor)} 击碎了 ${this.playerLabel(target)} 的 1 层屏障。\n`;
            return log;
        }
        if (defense !== Action.SHIELD && defense !== Action.ELEC_SWORD) {
            damage = 1;
        }
    } else if (action === Action.ICE_SWORD) {
        if ([Action.FIRE, Action.LIGHTNING].includes(defense)) {
            damage = 1;
            log += `❄ ${this.playerLabel(actor)} 的冰刀破解了 ${this.playerLabel(target)} 的【${this.getActionName(defense)}】。\n`;
        } else if (defense === Action.CHARGE) {
            damage = 1;
        } else if (defense === Action.BARRIER) {
            target.barrierCount -= 1;
            if (target.role === 'METAL_WARRIOR') {
                target.swordCount += 1;
                if (target.swordState === 'BROKEN') target.swordState = 'NORMAL';
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
        } else if (defense === Action.BARRIER) {
            target.barrierCount -= 1;
            if (target.role === 'METAL_WARRIOR') {
                target.swordCount += 1;
                if (target.swordState === 'BROKEN') target.swordState = 'NORMAL';
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
    this.getPlayers().forEach(player => {
        player.isParalyzed = false;
        if (player.nextTurnParalyze) {
            player.isParalyzed = true;
            player.nextTurnParalyze = false;
        }
        player.currentAction = null;
        player.currentTarget = null;
    });
    this.pendingHumanIndex = 0;
    this.battleResult = null;

    if (this.gameMode === 'ffa') {
        const alivePlayers = this.alive(this.getPlayers());
        const playerAlive = this.playerA.hp > 0;
        const cpuAlive = this.alive(this.cpuTeam()).length > 0;
        if (!playerAlive && !cpuAlive) {
            this.battleResult = { A: 'defeat', B: 'defeat', C: 'defeat', D: 'defeat' };
            log += '\n💀 【平局】四人乱斗无人幸存！';
            this.showEndActions();
        } else if (!playerAlive) {
            this.battleResult = { A: 'defeat' };
            this.cpuTeam().forEach(cpu => { this.battleResult[cpu.id] = cpu.hp > 0 ? 'victory' : 'defeat'; });
            log += '\n🏆 【游戏结束】你在四人乱斗中败北。';
            this.showEndActions();
        } else if (playerAlive && !cpuAlive) {
            this.battleResult = { A: 'victory', B: 'defeat', C: 'defeat', D: 'defeat' };
            log += `\n🏆 【游戏结束】${this.playerA.name} 成为四人乱斗最后的胜者！`;
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
    this.continueCpuOnlyRound();
};

// 绑定故事界面的交互事件及启动游戏
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgressBar = document.getElementById('loading-progress-bar');
    const collectGameAssetUrls = () => {
        const urls = new Set();
        const addUrl = rawUrl => {
            if (!rawUrl || rawUrl.startsWith('data:') || rawUrl.startsWith('blob:')) return;
            urls.add(new URL(rawUrl, window.location.href).href);
        };

        document.querySelectorAll('img[src]').forEach(img => addUrl(img.getAttribute('src')));
        Object.values(roleProfiles).forEach(profile => addUrl(profile.image));
        [
            'qizongmap.png',
            'icon.jpg',
            'assets/images/arane 1.webp',
            'assets/images/priest sprite transparent.webp',
            'assets/images/priest sprite 2 transparent.webp',
            'assets/images/warrior sprite 1.webp',
            'assets/images/warrior sprite 2.webp',
            'assets/images/burglar sprite 1.webp',
            'assets/images/burglar sprite 2.webp',
            'assets/images/metal sprite 1.webp',
            'assets/images/metal sprite 2.webp',
            'assets/images/barbarian sprite 1.webp',
            'assets/images/barbarian sprite 2.webp',
            'assets/images/knight_sprite_1.webp',
            'assets/images/knight_sprite_2.webp',
            'assets/images/blade_1.webp',
            'assets/images/iceblade_1.webp',
            'assets/images/electricblade_1.webp',
            'assets/images/fireball_1.webp',
            'assets/images/lightning_1.webp'
        ].forEach(addUrl);

        [...document.styleSheets].forEach(sheet => {
            let rules = [];
            try {
                rules = [...(sheet.cssRules || [])];
            } catch (error) {
                return;
            }
            rules.forEach(rule => {
                const cssText = rule.cssText || '';
                const matches = cssText.matchAll(/url\(["']?([^"')]+)["']?\)/g);
                for (const match of matches) addUrl(match[1]);
            });
        });

        return [...urls];
    };

    const preloadImage = url => new Promise(resolve => {
        const image = new Image();
        image.onload = () => resolve({ url, ok: true });
        image.onerror = () => resolve({ url, ok: false });
        image.src = url;
    });

    const loadingReady = (async () => {
        if (!loadingScreen || !loadingProgressBar) return [];
        const urls = collectGameAssetUrls();
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
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            loadingScreen.style.display = 'none';
        }, 250);
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
        hotspot.onclick = (e) => {
            const factionId = e.target.dataset.faction;
            const lore = factionLore[factionId];
            if (lore) {
                factionTitle.innerText = lore.name;
                factionDesc.innerText = lore.desc;
                factionModal.classList.remove('hidden');
                factionModal.style.display = 'flex';
            }
        };
    });

    // ================= 玩法介绍（Tutorial）逻辑 =================
    const tutModal = document.getElementById('tutorial-modal');
    const showTutBtn = document.getElementById('show-tutorial-btn');
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
        { text: "圣盾消耗一点气，能挡刀和火冲；牧师的慈露、盗贼的神偷也会视作自身使用圣盾。记住这些克制关系，你就能开始读招了。", anim: `<div class="tut-demo"><div class="tut-demo-icons"><div class="tut-skill-card"><strong>✨</strong>圣盾</div><div class="tut-skill-card"><strong>💧</strong>慈露</div><div class="tut-skill-card"><strong>🕵</strong>神偷</div></div><div class="tut-demo-character"><div class="tut-sprite shield"></div></div></div>` }
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

    if (showTutBtn) {
        showTutBtn.onclick = () => {
            currentTutStep = 0; updateTutStep();
            tutModal.classList.remove('hidden'); tutModal.style.display = 'flex';
        };
    }
    if (tutCloseBtn) tutCloseBtn.onclick = () => { tutModal.style.display = 'none'; };
    if (tutNextBtn) {
        tutNextBtn.onclick = () => {
            if (currentTutStep < tutSteps.length - 1) { currentTutStep++; updateTutStep(); } 
            else { tutModal.style.display = 'none'; document.getElementById('skip-story-btn').click(); }
        };
    }
    if (tutPrevBtn) {
        tutPrevBtn.onclick = () => {
            if (currentTutStep > 0) { currentTutStep--; updateTutStep(); }
        };
    }

    loadingReady.finally(() => {
        window.gameInstance = new Game();
    });
});
