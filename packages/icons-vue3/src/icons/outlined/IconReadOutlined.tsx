// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReadOutlinedSvg from 'gupo-icons-base/es/asn/ReadOutlined';

export interface ReadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconReadOutlined: ReadOutlinedIconType = (props, context) => <Icon name='ReadOutlined' {...{ ...props, ...context.attrs }} icon={ReadOutlinedSvg} />;

IconReadOutlined.displayName = 'IconReadOutlined';
IconReadOutlined.theme = 'outlined';
IconReadOutlined.originName = 'read';

export default IconReadOutlined;
