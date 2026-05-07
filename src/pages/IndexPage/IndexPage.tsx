import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        {/* 顶部大图展示区 - 震撼的视觉第一印象 */}
        <div style={{ padding: '16px 16px 0 16px' }}>
          <img 
            src="/ceshi.jpg" 
            style={{ 
              width: '100%', 
              borderRadius: '12px', 
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              display: 'block'
            }} 
            alt="NeoEve 主打作品" 
          />
        </div>

        <Section
          header="NeoEve 3D 艺术空间"
          footer="NeoEve 人工智能 AI 强力驱动的数字美学"
        >
          {/* 第一个作品条目 */}
          <Link to="/ton-connect">
            <Cell
              before={<Image src="/ceshi.jpg" size={48} style={{ borderRadius: '8px' }}/>}
              subtitle="查看作品详情与渲染参数"
            >
              意识觉醒 (Awareness Awakening)
            </Cell>
          </Link>
        </Section>

        <Section
          header="作品分类"
          footer="探索更多由 RTX 5060 Ti 打造的虚拟世界"
        >
          {/* 你可以将下面的 Link 路径改为你之后想展示的分类 */}
          <Link to="#">
            <Cell subtitle="高精度 3D 角色模型">角色展示 (Characters)</Cell>
          </Link>
          <Link to="#">
            <Cell subtitle="沉浸式 3D 场景渲染">场景构筑 (Environments)</Cell>
          </Link>
          <Link to="#">
            <Cell subtitle="意识与哲学的视觉呈现">概念艺术 (Concept Art)</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};
