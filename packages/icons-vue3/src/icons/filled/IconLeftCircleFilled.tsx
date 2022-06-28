// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftCircleFilledSvg from 'gupo-icons-base/es/asn/LeftCircleFilled';

export interface LeftCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLeftCircleFilled: LeftCircleFilledIconType = (props, context) => (
    <Icon name='LeftCircleFilled' {...{ ...props, ...context.attrs }} icon={LeftCircleFilledSvg} />
);

IconLeftCircleFilled.displayName = 'IconLeftCircleFilled';
IconLeftCircleFilled.theme = 'filled';
IconLeftCircleFilled.originName = 'left-circle';

export default IconLeftCircleFilled;
