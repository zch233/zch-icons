// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlackCircleFilledSvg from 'icon-base/es/asn/SlackCircleFilled';

export interface SlackCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSlackCircleFilled: SlackCircleFilledIconType = (props, context) => (
    <Icon name='SlackCircleFilled' {...{ ...props, ...context.attrs }} icon={SlackCircleFilledSvg} />
);

IconSlackCircleFilled.displayName = 'IconSlackCircleFilled';

export default IconSlackCircleFilled;
