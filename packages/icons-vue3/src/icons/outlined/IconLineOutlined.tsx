// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LineOutlinedSvg from 'gupo-icons-base/es/asn/LineOutlined';

export interface LineOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLineOutlined: LineOutlinedIconType = (props, context) => <Icon name='LineOutlined' {...{ ...props, ...context.attrs }} icon={LineOutlinedSvg} />;

IconLineOutlined.displayName = 'IconLineOutlined';
IconLineOutlined.theme = 'outlined';
IconLineOutlined.originName = 'line';

export default IconLineOutlined;
