// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LinkedinFilledSvg from 'gupo-icons-base/es/asn/LinkedinFilled';

export interface LinkedinFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLinkedinFilled: LinkedinFilledIconType = (props, context) => (
    <Icon name='LinkedinFilled' {...{ ...props, ...context.attrs }} icon={LinkedinFilledSvg} />
);

IconLinkedinFilled.displayName = 'IconLinkedinFilled';
IconLinkedinFilled.theme = 'filled';
IconLinkedinFilled.originName = 'linkedin';

export default IconLinkedinFilled;
