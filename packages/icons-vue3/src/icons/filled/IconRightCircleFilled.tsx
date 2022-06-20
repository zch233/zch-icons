// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightCircleFilledSvg from 'icon-base/es/asn/RightCircleFilled';

export interface RightCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRightCircleFilled: RightCircleFilledIconType = (props, context) => (
    <Icon name='RightCircleFilled' {...{ ...props, ...context.attrs }} icon={RightCircleFilledSvg} />
);

IconRightCircleFilled.displayName = 'IconRightCircleFilled';

export default IconRightCircleFilled;
