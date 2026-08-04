import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "祥康",
  lastName: "孟",
  name: "孟祥康",
  role: "AI 产品与工程实践",
  avatar: "/images/avatar-mxk.png",
  email: "",
  location: "Asia/Shanghai",
  languages: ["中文", "English"],
  locale: "zh-CN",
};

const newsletter: Newsletter = {
  display: false,
  title: <>订阅 {person.name} 的更新</>,
  description: <>关于 AI 产品、工程实践与真实场景交付。</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mmmmxxkk",
    essential: true,
  },
  {
    name: "AI Project Showcase",
    icon: "openLink",
    link: "https://github.com/mmmmxxkk/ai-project-showcase",
    essential: true,
  },
  {
    name: "个人说明书",
    icon: "document",
    link: "https://my.feishu.cn/docx/OvumdYS2ioqkyVx6y0rcxqQxnMb?from=from_copylink",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "首页",
  title: `${person.name} · AI 产品与工程实践`,
  description: "孟祥康的个人作品集，展示 AI Native 产品、计算机视觉、硬件交互与端到端交付实践。",
  headline: <>把 AI 原型推进到真实可用</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">好运咔嚓</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          2025 全球总冠军项目
        </Text>
      </Row>
    ),
    href: "/work/haoyun-kacha",
  },
  subline: (
    <>
      我是 {person.name}，南方科技大学电子信息专业硕士。<br />
      关注 AI Native 产品、视觉与生成、硬件交互，以及从概念到上线的端到端交付。
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "关于",
  title: `关于 ${person.name}`,
  description: `了解 ${person.name} 的经历、教育背景与能力方向。`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "个人介绍",
    description: (
      <>
        我关注如何让 AI 从演示级原型走向真实场景：理解用户任务、组合模型与工程系统，
        再通过交互、反馈和运营完成闭环。实践横跨 AI 广告、育儿、视觉创作、现场互动与智能硬件。
      </>
    ),
  },
  work: {
    display: true,
    title: "实践经历",
    experiences: [
      {
        company: "抖音 UGC 校园",
        timeframe: "2026.04 — 2026.08",
        role: "AI 生态与活动运营实习生",
        achievements: [
          <>参与 AI 生态与校园活动的策划、运营和协作，推动创意从活动机制走向真实参与。</>,
        ],
        images: [],
      },
      {
        company: "深客松",
        timeframe: "2025.12 — 至今",
        role: "S1 创始人与总运营",
        achievements: [
          <>围绕真实问题设计黑客松体验，负责活动机制、资源协同与现场交付。</>,
          <>于 2026.04 承担深圳大学城清北哈三校黑客松运营与全局统筹。</>,
        ],
        images: [],
      },
      {
        company: "AI 农创梦支教",
        timeframe: "2022.10 — 2024.10",
        role: "项目实践",
        achievements: [
          <>持续参与 AI 与农业创新相关的支教和实践活动。</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "教育背景",
    institutions: [
      {
        name: "南方科技大学 · 创新创业学院",
        description: <>电子信息专业硕士，聚焦 AI 产品与工程实践。</>,
      },
      {
        name: "国家级大学生创新训练项目",
        description: <>2022.06 — 2023.06，担任项目负责人。</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "能力方向",
    skills: [
      {
        title: "AI Native 产品",
        description: <>从用户任务、模型能力到产品闭环，设计与 AI 共生的交互和业务机制。</>,
        tags: [{ name: "Product" }, { name: "LLM" }, { name: "Multimodal" }],
        images: [],
      },
      {
        title: "端到端工程",
        description: <>覆盖 Web 开发、视频与语音管线、计算机视觉、硬件通信与公网部署。</>,
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "GitHub", icon: "github" },
        ],
        images: [
          {
            src: "/images/projects/inflow/01-home.png",
            alt: "InFlow 项目首页",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/nailar/01-home.png",
            alt: "NailAR 项目首页",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "文章",
  title: `文章 – ${person.name}`,
  description: `关于 AI 产品与工程实践的记录。`,
};

const work: Work = {
  path: "/work",
  label: "项目",
  title: `项目 – ${person.name}`,
  description: `孟祥康的 AI 产品、视觉、硬件与现场互动项目。`,
};

const hackathon = {
  path: "/hackathon",
  label: "黑客松",
  title: `黑客松 – ${person.name}`,
  description: "从参赛到发起和运营，记录孟祥康在黑客松中推动真实问题、团队协作与现场交付的实践。",
  headline: "把黑客松做成真实创造的现场",
  intro:
    "我关注的不只是 48 小时内做出一个 Demo，而是如何设计好问题、队伍、资源和反馈机制，让参与者能够把想法推进到可验证的产品。",
  events: [
    {
      name: "深客松 S1",
      timeframe: "2025.12 — 至今",
      role: "创始人 · 总运营",
      description:
        "从零设计黑客松的主题、赛制、招募、导师与评审协作，并承担现场运行和最终交付。",
      highlights: ["问题与赛制设计", "资源与合作方协同", "现场体验与全局运营"],
    },
    {
      name: "深圳大学城清北哈三校黑客松",
      timeframe: "2026.04",
      role: "运营 · 全局统筹",
      description:
        "协调多校参与者、组织方和现场资源，保证从报名、组队、开发到路演评审的整体节奏。",
      highlights: ["多校协作", "流程与节奏控制", "现场问题处理"],
    },
    {
      name: "好运咔嚓 · 抖音 AI 创变者计划",
      timeframe: "2025.09",
      role: "全球总冠军项目",
      description:
        "以 AI 影像体验参赛，在高强度周期内完成产品概念、原型实现、真实用户验证与路演表达。",
      highlights: ["全球总冠军", "10 万元奖金", "500+ 用户验证"],
      href: "/work/haoyun-kacha",
    },
  ],
};

const community = {
  path: "/community",
  label: "社群",
  title: `社群 – ${person.name}`,
  description: "孟祥康的社群发起、活动运营与公益实践，记录如何让人、问题和资源形成可持续的协作。",
  headline: "让人不只聚在一起，而是一起创造",
  intro:
    "我把社群看作一套协作系统：用共同问题吸引人，用清晰机制帮助人们开始合作，再用真实交付和长期关系让社群继续生长。",
  initiatives: [
    {
      name: "深客松",
      timeframe: "2025.12 — 至今",
      role: "S1 创始人 · 总运营",
      description:
        "围绕真实问题连接创造者、导师和合作方，负责社群定位、活动机制、资源协同与现场交付。",
      tags: ["社群发起", "机制设计", "资源连接"],
      href: "/hackathon",
    },
    {
      name: "深圳大学城创造者协作",
      timeframe: "2026.04",
      role: "多校活动运营 · 全局统筹",
      description:
        "在清北哈三校黑客松中协调参与者、组织方、导师和现场资源，让跨校协作能在高强度周期内真正发生。",
      tags: ["跨校协作", "现场运营", "共创网络"],
      href: "/hackathon",
    },
    {
      name: "AI 农创梦支教",
      timeframe: "2022.10 — 2024.10",
      role: "公益教育 · 长期实践",
      description:
        "持续参与 AI 与农业创新相关的支教活动，把技术理解转化为更容易参与的学习和实践体验。",
      tags: ["公益支教", "AI 科普", "长期参与"],
    },
  ],
};

const gallery: Gallery = {
  path: "/gallery",
  label: "图库",
  title: `图库 – ${person.name}`,
  description: `孟祥康的项目与活动记录。`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, hackathon, community, gallery };
