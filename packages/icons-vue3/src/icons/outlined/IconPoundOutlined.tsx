// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PoundOutlinedSvg from 'gupo-icons-base/es/asn/PoundOutlined';

export interface PoundOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPoundOutlined: PoundOutlinedIconType = (props, context) => <Icon name='PoundOutlined' {...{ ...props, ...context.attrs }} icon={PoundOutlinedSvg} />;

IconPoundOutlined.displayName = 'IconPoundOutlined';
IconPoundOutlined.theme = 'outlined';
IconPoundOutlined.originName = 'pound';

export default IconPoundOutlined;
