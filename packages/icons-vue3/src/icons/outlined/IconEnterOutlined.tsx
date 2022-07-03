// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EnterOutlinedSvg from 'icons-base/es/asn/EnterOutlined';

export interface EnterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEnterOutlined: EnterOutlinedIconType = (props, context) => <Icon name='EnterOutlined' {...{ ...props, ...context.attrs }} icon={EnterOutlinedSvg} />;

IconEnterOutlined.displayName = 'IconEnterOutlined';
IconEnterOutlined.theme = 'outlined';
IconEnterOutlined.originName = 'enter';

export default IconEnterOutlined;
