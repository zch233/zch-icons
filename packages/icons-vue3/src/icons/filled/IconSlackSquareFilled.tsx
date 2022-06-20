// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlackSquareFilledSvg from 'icon-base/es/asn/SlackSquareFilled';

export interface SlackSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSlackSquareFilled: SlackSquareFilledIconType = (props, context) => (
    <Icon name='SlackSquareFilled' {...{ ...props, ...context.attrs }} icon={SlackSquareFilledSvg} />
);

IconSlackSquareFilled.displayName = 'IconSlackSquareFilled';

export default IconSlackSquareFilled;
