// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VerifiedOutlinedSvg from 'icon-base/es/asn/VerifiedOutlined';

export interface VerifiedOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconVerifiedOutlined: VerifiedOutlinedIconType = (props, context) => (
    <Icon name='VerifiedOutlined' {...{ ...props, ...context.attrs }} icon={VerifiedOutlinedSvg} />
);

IconVerifiedOutlined.displayName = 'IconVerifiedOutlined';

export default IconVerifiedOutlined;
