// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InfoCircleTwotoneSvg from 'gupo-icons-base/es/asn/InfoCircleTwotone';

export interface InfoCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInfoCircleTwotone: InfoCircleTwotoneIconType = (props, context) => (
    <Icon name='InfoCircleTwotone' {...{ ...props, ...context.attrs }} icon={InfoCircleTwotoneSvg} />
);

IconInfoCircleTwotone.displayName = 'IconInfoCircleTwotone';
IconInfoCircleTwotone.theme = 'twotone';
IconInfoCircleTwotone.originName = 'info-circle';

export default IconInfoCircleTwotone;
