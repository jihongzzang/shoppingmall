import styled from 'styled-components';

function makeKey(value: string, index: number): string {
  return `${index}-${value}`;
}

const Container = styled.div`
  li {
    ${({ theme }) => theme.typography.body_03};
    color: ${({ theme }) => theme.colors.gray10};
    line-height: 1.6;
    margin-block: 0.8rem;
  }

  li:nth-of-type(3) {
    width: 100%;
    min-height: 1px;
    margin-block: 2rem;
    background: ${({ theme }) => theme.colors.gray5};
  }

  li:nth-of-type(3) ~ li {
    margin-block: 0;
  }
`;

type DescriptionProps = {
  value: string;
};

export default function Description({ value }: DescriptionProps) {
  if (!value.trim()) {
    return null;
  }

  const lines = value.split('\n');

  return (
    <Container>
      <ul>
        {lines.map((line, index) => (
          <li key={makeKey(line, index)}>{line}</li>
        ))}
      </ul>
    </Container>
  );
}
