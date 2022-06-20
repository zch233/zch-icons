// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeleteTwoToneSvg from 'icon-base/es/asn/DeleteTwoTone';

export interface DeleteTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDeleteTwoTone: DeleteTwoToneIconType = (props, context) => <Icon name='DeleteTwoTone' {...{ ...props, ...context.attrs }} icon={DeleteTwoToneSvg} />;

IconDeleteTwoTone.displayName = 'IconDeleteTwoTone';

export default IconDeleteTwoTone;
