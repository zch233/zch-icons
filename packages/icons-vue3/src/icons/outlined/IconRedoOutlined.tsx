// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedoOutlinedSvg from 'gupo-icons-base/es/asn/RedoOutlined';

export interface RedoOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRedoOutlined: RedoOutlinedIconType = (props, context) => <Icon name='RedoOutlined' {...{ ...props, ...context.attrs }} icon={RedoOutlinedSvg} />;

IconRedoOutlined.displayName = 'IconRedoOutlined';
IconRedoOutlined.theme = 'outlined';
IconRedoOutlined.originName = 'redo';

export default IconRedoOutlined;
