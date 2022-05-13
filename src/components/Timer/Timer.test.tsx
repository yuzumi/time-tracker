import { render, fireEvent } from '@testing-library/react-native';

import Timer from './Timer';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Timer', () => {
  const id = '1';
  const title = 'Abs';
  const project = 'Workout';
  const elapsed = 132323;
  const humanReadableElapsed = "00:02:12";
  const isRunning = false;
  const mockOnEdit = jest.fn();

  it('renders successfully', () => {
    const { toJSON } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
        }}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
        }}
      />
    );

    expect(getByText(title)).toBeDefined();
    expect(getByText(project)).toBeDefined();
    expect(getByText(humanReadableElapsed)).toBeDefined();
  });

  it('calls an onEdit callback when the edit button is pressed', () => {
    const { getByText } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
        }}
      />
    );

    fireEvent.press(getByText('Edit'));

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });
});