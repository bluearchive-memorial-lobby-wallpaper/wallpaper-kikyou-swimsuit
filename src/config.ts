import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-kikyou-swimsuit",
  slug: "kikyou-swimsuit",
  title: "Kikyou (Swimsuit)",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["zh-cn","ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["zh-cn","ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle_01",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 14.333333969116211,
    "lines": [
      {
        "id": "ch0300_memoriallobby_1_1",
        "text": {
          "zh-cn": "怎么样？还不错吧？",
          "ja": "どう？\nなかなかじゃない？",
          "ko": "어때?\n꽤나 좋지 않아?",
          "en": "How is it? Quite nice, right?"
        }
      },
      {
        "id": "ch0300_memoriallobby_1_2",
        "text": {
          "zh-cn": "这是我特意为今天做的哦。",
          "ja": "今日のために\n作ったの。",
          "ko": "오늘을 위해\n만들어 봤지.",
          "en": "I built it for you."
        }
      },
      {
        "id": "ch0300_memoriallobby_1_3",
        "text": {
          "zh-cn": "希望你能尽情享受。",
          "ja": "ほら、\n存分に楽しんで。",
          "ko": "마음껏\n즐겨줬으면 좋겠어.",
          "en": "So enjoy to your heart's content."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 20.666667938232422,
    "lines": [
      {
        "id": "ch0300_memoriallobby_2_1",
        "text": {
          "zh-cn": "其实……这些都是第一次。",
          "ja": "実は……全部、\n初めてなんだ。",
          "ko": "사실……\n처음이야.",
          "en": "To confess... This was a first for me."
        }
      },
      {
        "id": "ch0300_memoriallobby_2_2",
        "text": {
          "zh-cn": "无论是在做某个东西时，有个人的脸庞一直浮现在眼前……",
          "ja": "何かを作っているとき、\n誰かの顔が\nずっと浮かぶのも。",
          "ko": "뭔가를 만들며\n그 사람의 얼굴이\n계속 떠오른 것도.",
          "en": "To be thinking of someone while creating something."
        }
      },
      {
        "id": "ch0300_memoriallobby_2_3",
        "text": {
          "zh-cn": "还是让别人看到自己这样毫无防备的样子。",
          "ja": "無防備な姿を、\n誰かに見せるのも。",
          "ko": "이렇게 무방비한 모습을\n다른 사람에게 보이는 것도.",
          "en": "And to lower my defenses so completely in front of someone."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 8.333333969116211,
    "lines": [
      {
        "id": "ch0300_memoriallobby_3",
        "text": {
          "zh-cn": "我就……不指名道姓那个人是谁啦。",
          "ja": "別に……誰とまでは\n言わないけど。",
          "ko": "딱히…… 누구라고까지는\n말하지는 않겠지만.",
          "en": "I will not...specify who, though."
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 13.333333969116211,
    "lines": [
      {
        "id": "ch0300_memoriallobby_4_1",
        "text": {
          "zh-cn": "……以后也请一直陪在我身边吧。",
          "ja": "……これからも\n私のそばにいて。",
          "ko": "……앞으로도 내 곁에 있어 줘.",
          "en": "...Please continue to stay by my side."
        }
      },
      {
        "id": "ch0300_memoriallobby_4_2",
        "text": {
          "zh-cn": "我也会一直守护在你身边的。",
          "ja": "あんたの隣は、\n私が守るから。",
          "ko": "나도 항상 당신의 곁을\n지킬 테니까.",
          "en": "And I shall stay by yours."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 8.666666984558105,
    "lines": [
      {
        "id": "ch0300_memoriallobby_5",
        "text": {
          "zh-cn": "……这份盟约，会永远延续下去。",
          "ja": "……この同盟は、\n永遠だからね。",
          "ko": "……이 동맹은,\n영원한 거야.",
          "en": "...This alliance is eternal."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
