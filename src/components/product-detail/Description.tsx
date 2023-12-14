import styled from 'styled-components';

function makeKey(value: string, index: number): string {
  return `${index}-${value}`;
}

const Container = styled.div`
  li {
    min-height: 1rem;
    line-height: 1.6;
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
