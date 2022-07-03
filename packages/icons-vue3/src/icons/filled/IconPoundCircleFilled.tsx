// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PoundCircleFilledSvg from 'icons-base/es/asn/PoundCircleFilled';

export interface PoundCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPoundCircleFilled: PoundCircleFilledIconType = (props, context) => (
    <Icon name='PoundCircleFilled' {...{ ...props, ...context.attrs }} icon={PoundCircleFilledSvg} />
);

IconPoundCircleFilled.displayName = 'IconPoundCircleFilled';
IconPoundCircleFilled.theme = 'filled';
IconPoundCircleFilled.originName = 'pound-circle';

export default IconPoundCircleFilled;
