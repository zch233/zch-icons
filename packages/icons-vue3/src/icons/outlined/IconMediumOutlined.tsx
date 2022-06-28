// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MediumOutlinedSvg from 'gupo-icons-base/es/asn/MediumOutlined';

export interface MediumOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMediumOutlined: MediumOutlinedIconType = (props, context) => (
    <Icon name='MediumOutlined' {...{ ...props, ...context.attrs }} icon={MediumOutlinedSvg} />
);

IconMediumOutlined.displayName = 'IconMediumOutlined';
IconMediumOutlined.theme = 'outlined';
IconMediumOutlined.originName = 'medium';

export default IconMediumOutlined;
