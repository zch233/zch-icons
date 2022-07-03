// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UndoOutlinedSvg from 'icons-base/es/asn/UndoOutlined';

export interface UndoOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUndoOutlined: UndoOutlinedIconType = (props, context) => <Icon name='UndoOutlined' {...{ ...props, ...context.attrs }} icon={UndoOutlinedSvg} />;

IconUndoOutlined.displayName = 'IconUndoOutlined';
IconUndoOutlined.theme = 'outlined';
IconUndoOutlined.originName = 'undo';

export default IconUndoOutlined;
