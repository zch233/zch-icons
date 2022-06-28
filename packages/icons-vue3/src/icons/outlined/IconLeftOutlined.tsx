// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LeftOutlinedSvg from 'gupo-icons-base/es/asn/LeftOutlined';

export interface LeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLeftOutlined: LeftOutlinedIconType = (props, context) => <Icon name='LeftOutlined' {...{ ...props, ...context.attrs }} icon={LeftOutlinedSvg} />;

IconLeftOutlined.displayName = 'IconLeftOutlined';
IconLeftOutlined.theme = 'outlined';
IconLeftOutlined.originName = 'left';

export default IconLeftOutlined;
