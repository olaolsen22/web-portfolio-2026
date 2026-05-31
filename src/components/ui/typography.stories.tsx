import type { Meta, StoryObj } from '@storybook/react';
import {
  H1,
  H2,
  H2Display,
  H3,
  P,
  Lead,
  Muted,
  Label,
  NavLogo,
  NavLink,
  NavLinkMobile,
  Tag,
  Pill,
  ToolkitCategory,
  ToolkitSkill,
  Small,
} from './typography';

const meta = {
  title: 'UI/Typography',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
  render: () => (
    <div className="space-y-4">
      <H1>Ola Talaba Olsen</H1>
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Label>Section title</Label>
        <H2>Selected Work</H2>
      </div>
      <div>
        <Label>Display heading</Label>
        <H2Display>Let&apos;s Connect</H2Display>
      </div>
      <div>
        <Label>Subheading</Label>
        <H3>Frontend Engineer at Acme</H3>
      </div>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div className="space-y-4 max-w-prose">
      <div>
        <Label>Lead / Hero bio</Label>
        <Lead>
          I build fast, accessible web experiences. Currently focused on <strong>React</strong> and
          design systems.
        </Lead>
      </div>
      <div>
        <Label>Body</Label>
        <P>
          I&apos;m a frontend engineer with a passion for clean interfaces and thoughtful
          interactions. Based in Oslo, Norway.
        </P>
      </div>
      <div>
        <Label>Muted / Subtitle</Label>
        <Muted>A curated selection of projects from 2022–2025.</Muted>
      </div>
    </div>
  ),
};

export const Labels: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label>Label / Overline</Label>
        <div className="mt-1">
          <Label>01 — Work</Label>
        </div>
      </div>
    </div>
  ),
};

export const Nav: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Label>Logo</Label>
        <div className="mt-1">
          <NavLogo>OTO</NavLogo>
        </div>
      </div>
      <div>
        <Label>Desktop nav link</Label>
        <div className="mt-1 flex gap-6">
          <NavLink>Work</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Connect</NavLink>
        </div>
      </div>
      <div>
        <Label>Mobile nav link</Label>
        <div className="mt-1 flex flex-col gap-2">
          <NavLinkMobile>Work</NavLinkMobile>
          <NavLinkMobile>About</NavLinkMobile>
        </div>
      </div>
    </div>
  ),
};

export const TagsAndPills: Story = {
  name: 'Tags & Pills',
  render: () => (
    <div className="space-y-6">
      <div>
        <Label>Stack tag</Label>
        <div className="mt-1 flex gap-2 flex-wrap">
          <Tag>React</Tag>
          <Tag>TypeScript</Tag>
          <Tag>Tailwind</Tag>
        </div>
      </div>
      <div>
        <Label>Skill pill</Label>
        <div className="mt-1 flex gap-3 flex-wrap">
          <Pill>Accessibility</Pill>
          <Pill>Performance</Pill>
          <Pill>Design Systems</Pill>
        </div>
      </div>
    </div>
  ),
};

export const Toolkit: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <ToolkitCategory>Frontend</ToolkitCategory>
        <div className="mt-2 flex flex-col gap-1">
          <ToolkitSkill>React</ToolkitSkill>
          <ToolkitSkill>TypeScript</ToolkitSkill>
          <ToolkitSkill>Tailwind CSS</ToolkitSkill>
        </div>
      </div>
    </div>
  ),
};

export const Footer: Story = {
  render: () => (
    <div>
      <Small>© 2025 Ola Talaba Olsen. All rights reserved.</Small>
    </div>
  ),
};
