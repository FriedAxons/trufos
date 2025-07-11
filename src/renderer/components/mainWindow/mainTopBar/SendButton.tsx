import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowForwardIcon } from '@/components/icons';

interface SendButtonProps {
  onClick: () => void;
}

export const SendButton: React.FC<SendButtonProps> = ({ onClick }) => (
  <Button className="gap-3 pl-[30px]" onClick={onClick} variant="secondary">
    <span className="font-bold leading-4">Send</span>

    <ArrowForwardIcon />
  </Button>
);
