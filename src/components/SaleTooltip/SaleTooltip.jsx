import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import * as Tooltip from '@radix-ui/react-tooltip';

const SaleTooltip = () => {
    return (
  <Tooltip.Provider>
		<Tooltip.Root>
			<Tooltip.Trigger>
                <SaleFlag>Sale</SaleFlag>
			</Tooltip.Trigger>

			<Tooltip.Portal>
				<ContentWrapper 
          side = "top"
          align = "center"
          sideOffset = {6}
          alignOffset = {6}
        >
            Sale ends in 3 months!!!
					<Tooltip.Arrow />
				</ContentWrapper>
			</Tooltip.Portal>
		</Tooltip.Root>
	</Tooltip.Provider>
    );
}

const ContentWrapper = styled(Tooltip.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${COLORS.gray[500]};
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.bold};
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  height: 100px;
`;

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  height: 32px;
  padding: 0 10px;
  font-size: ${14/16}rem;
  line-height: 32px; /* Why does the  line height have to be the same as the height???*/
  background: red;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
  border-radius: 2px;
`;

const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;

export default SaleTooltip;