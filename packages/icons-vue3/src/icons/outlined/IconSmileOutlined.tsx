// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SmileOutlinedSvg from 'icons-base/es/asn/SmileOutlined';

export interface SmileOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSmileOutlined: SmileOutlinedIconType = (props, context) => <Icon name='SmileOutlined' {...{ ...props, ...context.attrs }} icon={SmileOutlinedSvg} />;

IconSmileOutlined.displayName = 'IconSmileOutlined';
IconSmileOutlined.theme = 'outlined';
IconSmileOutlined.originName = 'smile';

export default IconSmileOutlined;
