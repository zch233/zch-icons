// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BlockOutlinedSvg from 'icons-base/es/asn/BlockOutlined';

export interface BlockOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBlockOutlined: BlockOutlinedIconType = (props, context) => <Icon name='BlockOutlined' {...{ ...props, ...context.attrs }} icon={BlockOutlinedSvg} />;

IconBlockOutlined.displayName = 'IconBlockOutlined';
IconBlockOutlined.theme = 'outlined';
IconBlockOutlined.originName = 'block';

export default IconBlockOutlined;
