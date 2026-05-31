import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
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

describe('Typography', () => {
  it('H1 renders', () => {
    const { getByText } = render(
      <main>
        <H1>Hero title</H1>
      </main>
    );
    expect(getByText('Hero title')).toBeInTheDocument();
  });

  it('H2 renders', () => {
    const { getByText } = render(
      <main>
        <H2>Section title</H2>
      </main>
    );
    expect(getByText('Section title')).toBeInTheDocument();
  });

  it('H2Display renders', () => {
    const { getByText } = render(
      <main>
        <H2Display>Connect</H2Display>
      </main>
    );
    expect(getByText('Connect')).toBeInTheDocument();
  });

  it('H3 renders', () => {
    const { getByText } = render(
      <main>
        <H3>Subheading</H3>
      </main>
    );
    expect(getByText('Subheading')).toBeInTheDocument();
  });

  it('P renders', () => {
    const { getByText } = render(<P>Body text</P>);
    expect(getByText('Body text')).toBeInTheDocument();
  });

  it('Lead renders', () => {
    const { getByText } = render(<Lead>Hero bio</Lead>);
    expect(getByText('Hero bio')).toBeInTheDocument();
  });

  it('Muted renders', () => {
    const { getByText } = render(<Muted>Subtitle</Muted>);
    expect(getByText('Subtitle')).toBeInTheDocument();
  });

  it('Label renders', () => {
    const { getByText } = render(<Label>01</Label>);
    expect(getByText('01')).toBeInTheDocument();
  });

  it('NavLogo renders', () => {
    const { getByText } = render(<NavLogo>OTO</NavLogo>);
    expect(getByText('OTO')).toBeInTheDocument();
  });

  it('NavLink renders', () => {
    const { getByText } = render(<NavLink>Work</NavLink>);
    expect(getByText('Work')).toBeInTheDocument();
  });

  it('NavLinkMobile renders', () => {
    const { getByText } = render(<NavLinkMobile>Work</NavLinkMobile>);
    expect(getByText('Work')).toBeInTheDocument();
  });

  it('Tag renders', () => {
    const { getByText } = render(<Tag>React</Tag>);
    expect(getByText('React')).toBeInTheDocument();
  });

  it('Pill renders', () => {
    const { getByText } = render(<Pill>TypeScript</Pill>);
    expect(getByText('TypeScript')).toBeInTheDocument();
  });

  it('ToolkitCategory renders', () => {
    const { getByText } = render(<ToolkitCategory>Frontend</ToolkitCategory>);
    expect(getByText('Frontend')).toBeInTheDocument();
  });

  it('ToolkitSkill renders', () => {
    const { getByText } = render(<ToolkitSkill>React</ToolkitSkill>);
    expect(getByText('React')).toBeInTheDocument();
  });

  it('Small renders', () => {
    const { getByText } = render(<Small>Footer copy</Small>);
    expect(getByText('Footer copy')).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    const { container } = render(<P className="custom-class">text</P>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('H1 has no a11y violations', async () => {
    const { container } = render(
      <main>
        <H1>Page title</H1>
      </main>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('H2 has no a11y violations', async () => {
    const { container } = render(
      <main>
        <H2>Section</H2>
      </main>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('H2Display has no a11y violations', async () => {
    const { container } = render(
      <main>
        <H2Display>Connect</H2Display>
      </main>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('H3 has no a11y violations', async () => {
    const { container } = render(
      <main>
        <H3>Subheading</H3>
      </main>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('P has no a11y violations', async () => {
    const { container } = render(<P>Body text</P>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
