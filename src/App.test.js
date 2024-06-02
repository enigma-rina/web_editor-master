import { render, screen } from '@testing-library/react';
import Editor from './WebEditor/Editor';

test('renders Editor component', () => {
  render(<Editor language="xml" value="<h1>Hello</h1>" onChange={() => {}} />);
  const editorElement = screen.getByText(/Hello/i);
  expect(editorElement).toBeInTheDocument();
});
