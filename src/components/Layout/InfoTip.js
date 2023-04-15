import { useState } from 'react';
import { Tooltip } from 'reactstrap';

export default function InfoTip({ title, target }) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const capitalizeText = text => text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();

  return (
    <Tooltip
      placement="top"
      isOpen={isTooltipOpen}
      target={target}
      autohide={true}
      toggle={() => setIsTooltipOpen(!isTooltipOpen)}
    >
      {capitalizeText(title)}
    </Tooltip>
  );
}
