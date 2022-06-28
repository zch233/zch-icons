// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeleteFilledSvg from 'gupo-icons-base/es/asn/DeleteFilled';

export interface DeleteFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDeleteFilled: DeleteFilledIconType = (props, context) => <Icon name='DeleteFilled' {...{ ...props, ...context.attrs }} icon={DeleteFilledSvg} />;

IconDeleteFilled.displayName = 'IconDeleteFilled';
IconDeleteFilled.theme = 'filled';
IconDeleteFilled.originName = 'delete';

export default IconDeleteFilled;
