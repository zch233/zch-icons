// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseCircleTwotoneSvg from 'gupo-icons-base/es/asn/CloseCircleTwotone';

export interface CloseCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloseCircleTwotone: CloseCircleTwotoneIconType = (props, context) => (
    <Icon name='CloseCircleTwotone' {...{ ...props, ...context.attrs }} icon={CloseCircleTwotoneSvg} />
);

IconCloseCircleTwotone.displayName = 'IconCloseCircleTwotone';
IconCloseCircleTwotone.theme = 'twotone';
IconCloseCircleTwotone.originName = 'close-circle';

export default IconCloseCircleTwotone;
