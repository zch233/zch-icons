// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SafetyOutlinedSvg from 'gupo-icons-base/es/asn/SafetyOutlined';

export interface SafetyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSafetyOutlined: SafetyOutlinedIconType = (props, context) => (
    <Icon name='SafetyOutlined' {...{ ...props, ...context.attrs }} icon={SafetyOutlinedSvg} />
);

IconSafetyOutlined.displayName = 'IconSafetyOutlined';
IconSafetyOutlined.theme = 'outlined';
IconSafetyOutlined.originName = 'safety';

export default IconSafetyOutlined;
