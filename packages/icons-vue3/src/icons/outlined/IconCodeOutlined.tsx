// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeOutlinedSvg from 'icons-base/es/asn/CodeOutlined';

export interface CodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodeOutlined: CodeOutlinedIconType = (props, context) => <Icon name='CodeOutlined' {...{ ...props, ...context.attrs }} icon={CodeOutlinedSvg} />;

IconCodeOutlined.displayName = 'IconCodeOutlined';
IconCodeOutlined.theme = 'outlined';
IconCodeOutlined.originName = 'code';

export default IconCodeOutlined;
